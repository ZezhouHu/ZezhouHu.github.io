import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the academic homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Zezhou Hu \| Theoretical Physics<\/title>/i);
  assert.match(html, /Questions that connect fields/);
  assert.match(html, /Selected work/);
  assert.match(html, /View all 14 publications/);
  assert.match(html, /English/);
  assert.match(html, /中文/);
  assert.match(html, /aria-expanded="false"/);
  assert.match(html, /z\.z\.hu@pku\.edu\.cn/);
  assert.match(html, /zezhouhu2000@gmail\.com/);
  assert.match(html, /Prof\. Bin Chen/);
  assert.match(html, /space\.bilibili\.com\/498084929/);
  assert.doesNotMatch(html, /Map of research interests|Research map/);
  assert.doesNotMatch(html, /I study optical appearances of black holes/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("publishes only the explicitly approved contact details", async () => {
  const response = await render();
  const html = await response.text();

  const emails = [
    ...new Set(
      [...html.matchAll(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi)].map(
        ([email]) => email,
      ),
    ),
  ].sort();

  assert.deepEqual(emails, ["z.z.hu@pku.edu.cn", "zezhouhu2000@gmail.com"].sort());
  assert.doesNotMatch(html, /手机号|电话|地址|身份证/i);
  assert.doesNotMatch(html, /1[3-9]\d{9}/);
});
