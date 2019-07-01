import React from 'react';
import { Carousel } from 'antd-mobile';

const App = ({bannerlist, imgHeight}) => (
  <Carousel
    autoplay
    infinite
    style={{ width: '100%', height: imgHeight }}
  >
    {
      bannerlist.map((item, index) => {
        return (
          <a
            href="javascript:;"
            alt="111"
            key = { index }
            style={{ display: 'inline-block', width: '100%', height: imgHeight }}
            >
            <img src={ item.banner_img_url } style={{ display: 'block', width: '100%',height: imgHeight }} alt="http://www.baidu.com"/>
          </a>
        )
      })
    }

  </Carousel>
)

export default App;