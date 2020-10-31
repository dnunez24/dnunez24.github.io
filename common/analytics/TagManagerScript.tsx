/* eslint-disable react/no-danger */
import type { FC } from "react";
import { useAppConfig } from "common/config";

const TagManagerScript: FC<{ id?: string }> = ({ id = "gtm" }) => {
  const { googleTagManagerContainerId = "" } = useAppConfig();

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: "const dataLayer = [];" }} />
      <script
        id={id}
        key={id}
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${googleTagManagerContainerId}');`,
        }}
      />
    </>
  );
};

export { TagManagerScript };
