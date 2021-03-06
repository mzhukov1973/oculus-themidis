/*===========================================================================*/
/*  Copyright 2017 Maxim Zhukov                                              */
/*                                                                           */
/*  Licensed under the Apache License, Version 2.0 (the "License");          */
/*  you may not use this file except in compliance with the License.         */
/*  You may obtain a copy of the License at                                  */
/*                                                                           */
/*      http://www.apache.org/licenses/LICENSE-2.0                           */
/*                                                                           */
/*  Unless required by applicable law or agreed to in writing, software      */
/*  distributed under the License is distributed on an "AS IS" BASIS,        */
/*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. */
/*  See the License for the specific language governing permissions and      */
/*  limitations under the License.                                           */
/*===========================================================================*/
import React from 'react'
import ArticleAdm from './subcomponents/ArticleAdm.js';
import PropTypes from 'prop-types';
import './css/admTables.css'

class SaleAdm extends React.Component {

  render() {
    return (
<div>
     <ArticleAdm articleData={this.props.adm_actData.articles[0]}/>
     <ArticleAdm articleData={this.props.adm_actData.articles[1]}/>
     <ArticleAdm articleData={this.props.adm_actData.articles[2]}/>
     <ArticleAdm articleData={this.props.adm_actData.articles[3]}/>
</div>
    );
  }
}

SaleAdm.propTypes = 
{
 adm_actData: PropTypes.shape(
  {
   articles: PropTypes.arrayOf(PropTypes.shape(
                {
                 id:PropTypes.number.isRequired, 
                 last_edit:PropTypes.string.isRequired, 
                 hdng:PropTypes.string.isRequired, 
                 subhdng:PropTypes.string.isRequired, 
                 bdy:PropTypes.string.isRequired, 
                 pic:PropTypes.string.isRequired, 
                 bg:PropTypes.string.isRequired, 
                 visibility:PropTypes.number.isRequired,
                 updating:PropTypes.number.isRequired 
                }
               ).isRequired
              ).isRequired
  }
 ).isRequired
}


export default SaleAdm
