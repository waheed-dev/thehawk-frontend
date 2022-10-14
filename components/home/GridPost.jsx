import React, { useEffect, useState } from 'react'
import CommonSectionFetearuedPost from './CommonSectionFetearuedPost'
import { AsyncPaginate } from "react-select-async-paginate";
import loadOptions from "./loadOptions";
import Link from 'next/link';
import url from '@/config/url';
import slugify from 'slugify';
import moment from 'moment';
export default function GridPost({ posts, categoryDetail, subCategory }) {
    const length = 150
    const [value, onChange] = useState(null);
    const [filteredPost, setfilteredPost] = useState(posts)
    const onChangeFunc = (e) => {
        onChange(e)

        const data = posts.filter((post) => {

            return post.subCategory.id === e._id
        })
        setfilteredPost(data)
    }
    const [labeledSubCat, setlabeledSubCat] = useState([])
    const converSubcategoryNameIntoLabel = () => {
        const data = subCategory.map((subCat) => {
            subCat.label = subCat.subCategoryName
            subCat.value = subCat._id
            return subCat
        })
        setlabeledSubCat(data)

    }
    useEffect(() => {

        converSubcategoryNameIntoLabel()
    }, [])

    return (
        <>
            <div className="row">
                <div className="col-md-12">


                    <>

                        <div className="cat-blocks">
                            <h4>
                                <span>





                                    <Link href={
                                        url.category
                                            .single.replace(':name', slugify(categoryDetail.category))
                                            .replace(':id', categoryDetail._id)

                                    }>
                                        <a style={{
                                            color: "#fff"
                                        }}>
                                            {categoryDetail.category}
                                        </a></Link>

                                </span>
                                <div style={{
                                    marginTop: '20px',
                                    width: '20%'

                                }}>
                                    <AsyncPaginate

                                        isLoading={false}
                                        loadingMessage={''}
                                        value={value}
                                        loadOptions={(search, prevOptions) => loadOptions(search, prevOptions, subCategory)}
                                        onChange={onChangeFunc}
                                    />
                                </div>

                            </h4>

                            <div className="row">
                                {
                                    filteredPost
                                        .filter((filtered) => filtered.isFetaured === true)
                                        .sort(
                                            (a, b) =>
                                                new Date(b.createdAt).getTime() -
                                                new Date(a.createdAt).getTime()
                                        )
                                        .slice(0, 1)
                                        .map((fetaurePost) => (
                                            <>
                                                <CommonSectionFetearuedPost fetaurePost={fetaurePost} />
                                            </>
                                        ))
                                }


                                <div className="col-md-6 cb-info">
                                    {
                                        filteredPost
                                            .filter((filtered) => filtered.isFetaured === false)
                                            .filter((subCat) => subCat.subCategory.id !== '')

                                            .sort(
                                                (a, b) =>
                                                    new Date(b.createdAt).getTime() -
                                                    new Date(a.createdAt).getTime()
                                            )
                                            .slice(0, 1)
                                            .map((post) => (
                                                <>
                                                    <span className="cat">{subCategory.filter((subCat) => subCat._id === post.subCategory.id)[0]?.subCategoryName}</span>
                                                    <h5>
                                                        <Link href={url.post.single.replace(':title', slugify(post.postitle)).replace(':id', post._id)}>

                                                            <a >
                                                                {post.postitle}
                                                            </a>
                                                        </Link>
                                                    </h5>
                                                    <span className="date">Posted on {moment(post.createdAt).format("MMMM")} {moment(post.createdAt).format("D")}, {moment(post.createdAt).format("Y")}</span>
                                                    <p>
                                                        {
                                                            post.postText.length > length ?
                                                                post.postText
                                                                    .substr(0, length)
                                                                    .substr(
                                                                        0,
                                                                        Math.min(
                                                                            post.postText.length,
                                                                            post.postText.lastIndexOf(' ')
                                                                        )
                                                                    ) + ' ...'
                                                                : post.postText}
                                                    </p>
                                                </>
                                            ))
                                    }



                                    <ul>
                                        {
                                            filteredPost
                                                .filter((filtered) => filtered.isFetaured === false)


                                                .sort(
                                                    (a, b) =>
                                                        new Date(b.createdAt).getTime() -
                                                        new Date(a.createdAt).getTime()
                                                )
                                                .slice(1,

                                                    filteredPost
                                                        .filter((filtered) => filtered.isFetaured === false)
                                                        .filter((subCat) => subCat.subCategory.id !== '').length === 0 ? 10 : 6

                                                )
                                                .map((post) => (
                                                    <>
                                                        <li>
                                                            <Link href={url.post.single.replace(':title', slugify(post.postitle)).replace(':id', post._id)}>

                                                                <a >
                                                                    {post.postitle}
                                                                </a>
                                                            </Link>
                                                        </li>
                                                    </>
                                                ))
                                        }



                                    </ul>
                                </div>


                            </div>
                            <div className="space40"></div>
                        </div>
                    </>




                </div>
            </div>
        </>
    )
}
