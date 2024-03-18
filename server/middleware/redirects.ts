export default defineEventHandler(async (event) => {
  if (event.node.req.originalUrl == "/call-for-papers") {
    return await sendRedirect(
      event,
      "https://app.codetalks.com/call-for-papers",
    );
  }
  const deDomain = "codetalks.de";
  const enDomain = "codetalks.com";
  if (event.node.req.headers.host?.endsWith(deDomain)) {
    return await sendRedirect(
      event,
      getRequestURL(event).href.replace(deDomain, enDomain),
    );
  }
});
