import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'

export default function ShopDish () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='shopDish'>
      <Text>Hello world!</Text>
    </View>
  )
}
