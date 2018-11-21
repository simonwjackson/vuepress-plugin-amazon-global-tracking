export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  if (process.env.NODE_ENV === 'production' && AMAZON_INSTANCE_ID && typeof window !== 'undefined') {
    (function (d, script) {
      const html = `<div id="amzn-assoc-ad-${AMAZON_INSTANCE_ID}"></div>`
      const doc = new DOMParser().parseFromString(html, "text/html");
      d.body.append(doc.body.firstElementChild)

      script = d.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = `//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=${AMAZON_INSTANCE_ID}`;

      d.body.appendChild(script);
    }(document));
  }
}