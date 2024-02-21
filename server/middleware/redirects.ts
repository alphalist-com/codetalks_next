export default defineEventHandler(async (event) => {
  // redirect all management paths to app.
  // OldApi and ressource calls need go to app.codetalks.com
  //

  const deDomain = "codetalks.de";
  const enDomain = "codetalks.com";
  if (event.node.req.headers.host?.endsWith(deDomain)) {
    return await sendRedirect(
      event,
      getRequestURL(event).href.replace(deDomain, enDomain),
    );
  }
});
