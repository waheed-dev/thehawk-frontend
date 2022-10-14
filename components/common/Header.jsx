import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import api from '@/config/api';
import endpoints from '@/config/endpoints';
import { useRouter } from 'next/router';
import url from '@/config/url'
import slugify from 'slugify';
export default function Header() {
    const router = useRouter()
    const [categoryData, setcategoryData] = useState([])
    const [subCategoryData, setsubCategoryData] = useState([]);
    const [rssData, setrssData] = useState([])
    const [sticky, setSticky] = useState(false);
    const [menuOpen, setmenuOpen] = useState(false)
    const [query, setquery] = useState('')
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
        if (router.query.q) {
            setmenuOpen(true)
            setquery(router.query.q.replaceAll('-', ' '))
        }
    }, [router.query.q])



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


    const search = (searchquery) => {
        if (!menuOpen) {
            setmenuOpen(true)
        } else {
            if (!searchquery) {
                return
            }
            router.push(url.search.replace(':q', slugify(searchquery))) 
        }
    }
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
                                    <input value={query} style={{

                                        outline: "1px solid #ccc"

                                    }} onChange={(e) => {
                                        setquery(e.target.value)
                                    }} type="search" placeholder="Type to search and hit enter" />
                                </form>
                            </div>
                            {/* fa fa-search fa-times */}
                            <span
                                onClick={() => {
                                    search(query)
                                }}
                                
                                className="search-trigger">
                                <i className={"fa fa-search"}  />
                                {
                                    menuOpen ? <i style={{
                                        marginLeft: '7px'
                                    }}
                                    
                                        onClick={() => {
                                            setmenuOpen(false)
                                        }} className={menuOpen ? "fa fa-search fa-times" : "fa fa-search"} /> : null
                                }
                               

                            </span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
