import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import IndexNav from '../components/indexnav/IndexNav';
import PathBox from '../components/pathbox/PathBox';
import SideBar from '../components/sidebar/SideBar';
import Footer from '../components/footer/Footer';
import BackToTopBtn from '../components/backtotopbtn/BackToTopBtn';
import Pagination from '../components/pagination/Pagination'
import axios from 'axios';

import '../asset/css/templateNews.css'

function TemplateNews() {
    const sidebarTitle = '最新消息'

    let [newsData, setNewData] = useState([])
    let [curPage,setCurPage] = useState(1)
    let [newsNum,setNewsNum] = useState(10)
    
    const FetchData = async () => {
        const result = await axios.get('http://localhost:8000/news')
        setNewData(result.data)
    }

    useEffect(()=>{
        FetchData()
      },[])
      
      const lastIndex = curPage * newsNum;
      const firstIndex = lastIndex - newsNum;
      const currentNews =  newsData.slice(firstIndex, lastIndex)
    // console.log(newsData)

    return (
      <React.Fragment>
        <Header />
        <IndexNav />
        <PathBox />
        <div className="container">
            <div className="row">
              <SideBar title={ sidebarTitle }/>

              {/* 這裡放你的主內容 */}
              <div className='col-9'>
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab"
                            data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane"
                            aria-selected="true"
                            style={{backgroundColor: '#CF4501',color:'white'}}
                            >焦點新聞</button>
                    </li>
                  </ul>
                  <div className="tab-content " id="myTabContent">
                    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                      <div className="mb-4 new-content">
                      {currentNews.map((val,ind) => {
                          return (
                            <>
                              <div className="newsitem text-truncate" key={ind}>
                                <a href="#a" target="_blank" className='newslink'>
                                {val.title}
                                </a>
                              </div>
                            </>
                          ) 
                        })
                      }     
                      </div>
                    </div>
                  </div> 
                    <Pagination 
                      totalNews={newsData.length}
                      newsNum={newsNum}
                      setCurPage={setCurPage}
                      curPage={curPage}
                    />
              </div>
            </div>
        </div>
  
        {/* 底下用8個換行空出雨footer距離 */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
        <BackToTopBtn />
      </React.Fragment>
    );
  }

export default TemplateNews