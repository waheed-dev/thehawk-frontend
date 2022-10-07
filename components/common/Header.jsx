import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import api from '@/config/api';
import endpoints from '@/config/endpoints';
export default function Header() {
    const [categoryData, setcategoryData] = useState([])
    const [subCategoryData, setsubCategoryData] = useState([]);
    const [rssData, setrssData] = useState([])
    const [sticky, setSticky] = useState(false);
    const [menuOpen, setmenuOpen] = useState(false)
    const fetchData = async () => {


        try {
            const categoryPromise = await  axios.get(`${api}${endpoints.category.all}`)
            const subCategoryPromise = await axios.get(`${api}${endpoints.subCategory.all}`)
            const rssPromise = await axios.get(`${api}${endpoints.rss.all}`)
          await Promise.all([categoryPromise, subCategoryPromise, rssPromise]);

            setcategoryData(categoryPromise.data)
            setsubCategoryData(subCategoryPromise.data)
            setrssData(rssPromise.data)

        } catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])



    const handleScroll = () => {
        if (window.scrollY > 70) {
            setSticky(true);
        } else if (window.scrollY < 70) {
            setSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [sticky]);
    return (
        <>

            <header className={` ${true === sticky ? "sticky-header" : null
                }`}>
                <div className="col-md-12">
                    <div className="row">

                        <div className="col-md-12">
                            <Navbar categoryData={categoryData} subCategoryData={subCategoryData} rssData={rssData} />
                           

                            <div style={{
                                display: `${menuOpen ? 'block' : 'none'}`
                            }} className="search">
                                <form>
                                    <input style={{

                                        outline: "1px solid #ccc"

                                    }} type="search" placeholder="Type to search and hit enter" />
                                </form>
                            </div>
                            {/* fa fa-search fa-times */}
                            <span onClick={() => {
                                setmenuOpen((previouSate) => !previouSate)
                            }} className="search-trigger">
                                <i className={menuOpen ? "fa fa-search fa-times" :"fa fa-search"} />
                            </span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
