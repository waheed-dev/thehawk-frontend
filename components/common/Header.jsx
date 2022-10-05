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
                           

                            <div className="search">
                                <form>
                                    <input type="search" placeholder="Type to search and hit enter" />
                                </form>
                            </div>
                            <span className="search-trigger"><i className="fa fa-search"></i></span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
