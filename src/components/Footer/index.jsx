import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss'
class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <ul>
                    <li><a href="#">首页</a></li>
                    <li><a href="#">关于我们</a></li>
                    <li><a href="#">联系我们</a></li>
                    <li><a href="#">使用条款</a></li>
                </ul>
                <nav><a href="#">Copyright 版权所有 © 北京阿博茨科技有限公司</a></nav>
            </div>
        );
    }
}

Footer.propTypes = {
    companyName: PropTypes.string,
    menulist: PropTypes.array
};

export default Footer;