import React from 'react'
import {Link} from 'react-router'


import FooterComponent from '../common/footer/footerComponent'


import './home.scss'


class homeComponent extends React.Component {
    render(){
        return(
            <div className="home">
                <input type="text" value="搜索商品" />
                
                {/*注释：公共底部*/}
                <FooterComponent />
            </div>
        )
    }
}

export default homeComponent