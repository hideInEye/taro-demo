import { View, Button } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import "./index.less";

export default function Home() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  const navShopDish = () => {
    Taro.navigateTo({
      url: "/pages/shopDish/index",
    });
  };

  return (
    <View className="home">
      <Button size="mini" onClick={navShopDish}>
        点菜
      </Button>
    </View>
  );
}
