"use client"

import Script from 'next/script'

export default function Analytics() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  const yandexId = process.env.NEXT_PUBLIC_YANDEX_ID
  const fbPixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID

  // Only render analytics if IDs are provided
  if (!gtmId && !gaId && !yandexId && !fbPixelId) {
    return null
  }

  return (
    <>
      {/* Google Tag Manager */}
      {gtmId && (
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `,
          }}
        />
      )}
      
      {/* Google Analytics 4 */}
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                page_title: 'EduCRM - O\'quv Markazlarni Avtomatlashtiruvchi Tizim',
                page_location: window.location.href,
                custom_map: {
                  'custom_dimension1': 'page_type',
                  'custom_dimension2': 'user_type'
                }
              });
            `}
          </Script>
        </>
      )}
      
      {/* Yandex Metrika */}
      {yandexId && (
        <Script id="yandex" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            ym('${yandexId}', "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });
          `}
        </Script>
      )}
      
      {/* Facebook Pixel */}
      {fbPixelId && (
        <Script id="facebook" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${fbPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  )
} 