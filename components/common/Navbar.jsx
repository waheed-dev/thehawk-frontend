import React, { useState } from 'react'
import Collect from '@supercharge/collections'
import url from '@/config/url'
import { useRouter } from 'next/router'
import Link from 'next/link'
import slugify from 'slugify'
import { v4 as uuidv4 } from 'uuid';
import { memo } from 'react'

const Navbar = ({ categoryData, subCategoryData, rssData }) => {
    const [showMenu, setshowMenu] = useState(false)
    let length
    const router = useRouter()

    const [subCatArray, setsubCatArray] = useState([])

    const filterinfDataIntoColumn = async (id) => {

        length = Math.ceil(subCategoryData?.filter((subCategory) => subCategory.categoryId === id).length / 5)



        const data = subCategoryData?.filter((subCategory) => {
            return subCategory.categoryId === id
        })
        const splited = await Collect(data).chunk(length).all()
        setsubCatArray(splited)

    }


    return (
        <>
            <div className="menu-trigger"><i className="fa fa-align-justify"></i> Menu</div>
            <nav>
                <ul>
                    {/* active */}
                    <li className={router.pathname == url.home ? "active" : ""} key={uuidv4()}>
                        <Link href={url.home}>

                            <a >Home</a>
                        </Link>

                    </li>


                    {
                        categoryData?.filter((filteredData) => filteredData.addToMenu === true)
                            .sort((a, b) => a.position-b.position)
                            .map((menu) => (
                                <>
                                    {/* sub-nav */}
                                    <li key={menu._id} className={router.asPath == url.category.single.replace(":name", slugify(menu.category)).replace(':id', menu._id) ? "active" : ""}>
                                        <Link href={url.category.single.replace(":name", slugify(menu.category)).replace(':id', menu._id)}>
                                            <a onMouseEnter={() => {
                                                filterinfDataIntoColumn(menu._id)
                                                setshowMenu(true)
                                            }}
                                            
                                               
                                                className={`${subCategoryData?.filter(
                                                (element) => element.categoryId === menu._id
                                            ).length !== 0 ? 'sub-nav' : ''}`}>{menu.category}</a>

                                        </Link>




                                        {subCategoryData?.filter(
                                            (element) => element.categoryId === menu._id
                                        ).length !== 0 && showMenu ? <>

                                                <ul
                                                    onMouseLeave={() => {
                                                        setshowMenu(false)
                                                    filterinfDataIntoColumn('')

                                                    }}
                                                    className="mega-menu">
                                                <li key={uuidv4()} className="sub-menu">
                                                    <ul>
                                                        {
                                                            subCatArray[0]?.map((subCategory) => (
                                                                <>
                                                                    <li key={uuidv4()}>
                                                                        <Link href={url.subCategory.single.replace(":name", slugify(subCategory.subCategoryName)).replace(':id', subCategory._id)}>

                                                                            <a >
                                                                                {subCategory.subCategoryName}
                                                                            </a>
                                                                        </Link>
                                                                    </li>

                                                                </>


                                                            ))

                                                        }
                                                    </ul>
                                                </li>

                                                <li key={uuidv4()} className="sub-menu">
                                                    <ul>
                                                        {
                                                            subCatArray[1]?.map((subCategory) => (
                                                                <>
                                                                    <li key={uuidv4()}>
                                                                        <Link href={url.subCategory.single.replace(":name", slugify(subCategory.subCategoryName)).replace(':id', subCategory._id)}>

                                                                            <a >
                                                                                {subCategory.subCategoryName}
                                                                            </a>
                                                                        </Link>
                                                                    </li>

                                                                </>


                                                            ))

                                                        }
                                                    </ul>
                                                </li>
                                                <li key={uuidv4()} className="sub-menu">
                                                    <ul>
                                                        {
                                                            subCatArray[2]?.map((subCategory) => (
                                                                <>
                                                                    <li key={uuidv4()}>
                                                                        <Link href={url.subCategory.single.replace(":name", slugify(subCategory.subCategoryName)).replace(':id', subCategory._id)}>

                                                                            <a >
                                                                                {subCategory.subCategoryName}
                                                                            </a>
                                                                        </Link>
                                                                    </li>

                                                                </>


                                                            ))

                                                        }
                                                    </ul>
                                                </li>
                                                <li key={uuidv4()} className="sub-menu">
                                                    <ul>
                                                        {
                                                            subCatArray[3]?.map((subCategory) => (
                                                                <>
                                                                    <li key={uuidv4()}>
                                                                        <Link href={url.subCategory.single.replace(":name", slugify(subCategory.subCategoryName)).replace(':id', subCategory._id)}>

                                                                            <a >
                                                                                {subCategory.subCategoryName}
                                                                            </a>
                                                                        </Link>
                                                                    </li>

                                                                </>


                                                            ))

                                                        }
                                                    </ul>
                                                </li>
                                                <li key={uuidv4()} className="sub-menu">
                                                    <ul>
                                                        {
                                                            subCatArray[4]?.map((subCategory) => (
                                                                <>
                                                                    <li key={uuidv4()}>
                                                                        <Link href={url.subCategory.single.replace(":name", slugify(subCategory.subCategoryName)).replace(':id', subCategory._id)}>

                                                                            <a >
                                                                                {subCategory.subCategoryName}
                                                                            </a>
                                                                        </Link>
                                                                    </li>

                                                                </>


                                                            ))

                                                        }
                                                    </ul>
                                                </li>

                                            </ul>

                                        </> : null
                                        }



                                    </li>
                                </>
                            ))
                    }






                </ul>
            </nav>
        </>
    )
}


export default memo(Navbar)