import type { UserConfigExport } from "@tarojs/cli";

export default {
  mini: {
    compiler:{
      type: 'vite'
    }
  },
  h5: {},
} satisfies UserConfigExport<"vite">;
