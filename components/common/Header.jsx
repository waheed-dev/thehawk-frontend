import React from 'react'


export default function Header() {
    return (
        <>

            <header>
                <div className="col-md-12">
                    <div className="row">

                        <div className="col-md-12">
                            <div className="menu-trigger"><i className="fa fa-align-justify"></i> Menu</div>
                            <nav>
                                <ul>
                                    <li className="active">
                                        <a href="#" className="sub-nav">Pages</a>
                                        <ul className="mega-menu">
                                            <li className="sub-menu">
                                                <ul>
                                                    <li><a href="./index.html">Index 1</a></li>
                                                    <li><a href="./index_2.html">Index 2</a></li>
                                                    <li><a href="./index_3.html">Index 3</a></li>
                                                    <li><a href="./about.html">About</a></li>
                                                </ul>
                                            </li>
                                            <li className="sub-menu">
                                                <ul>
                                                    <li><a href="./archives.html">Archives</a></li>
                                                    <li><a href="./category.html">Category</a></li>
                                                    <li><a href="./contributor.html">Contributor</a></li>
                                                </ul>
                                            </li>
                                            <li className="sub-menu">
                                                <ul>
                                                    <li><a href="./gallery_index.html">Gallery</a></li>
                                                    <li><a href="./gallery_detail.html">Gallery Details</a></li>
                                                    <li><a href="./login.html">Login</a></li>
                                                </ul>
                                            </li>
                                            <li className="sub-menu">
                                                <ul>
                                                    <li><a href="./search_results.html">Search Results</a></li>
                                                    <li><a href="./single_post.html">Single Post</a></li>
                                                    <li><a href="./contact.html">Contact</a></li>
                                                </ul>
                                            </li>
                                            <li className="sub-menu">
                                                <ul>
                                                    <li><a href="./video_index.html">Video Gallery</a></li>
                                                    <li><a href="./video_detail.html">Single Video</a></li>
                                                    <li><a href="./fullwidth.html">Full Width</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Sport</a></li>
                                    <li><a href="#">Uncategorized</a></li>
                                    <li><a href="#">Entertainment</a></li>
                                    <li><a href="#">Culture</a></li>
                                    <li><a href="#">Travelling</a></li>
                                    <li><a href="#">Photos</a></li>
                                    <li><a href="#">Videos</a></li>
                                    <li><a href="#">More</a></li>
                                    <li>
                                        <a href="#" className="sub-nav">Mega Menu</a>
                                        <ul className="mega-menu">
                                            <li className="sub-menu">
                                                <ul>
                                                    <li><a href="#">Digital Startup</a></li>
                                                    <li><a href="#">E-commerce</a></li>
                                                    <li><a href="#">Economic</a></li>
                                                    <li><a href="#">Kurs</a></li>
                                                    <li><a href="#">Others</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="./single_post.html">
                                                    <div className="news-feed">
                                                        <img src="images/menu/1.jpg" className="img-responsive" alt="" />
                                                        <h4>Nonummy Nibh Euismod Tincidunt ut Laoreet</h4>
                                                        <p>Posted on october 4, 2014</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./single_post.html">
                                                    <div className="news-feed">
                                                        <img src="images/menu/2.jpg" className="img-responsive" alt="" />
                                                        <h4>Nonummy Nibh Euismod Tincidunt ut Laoreet</h4>
                                                        <p>Posted on october 4, 2014</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./single_post.html">
                                                    <div className="news-feed">
                                                        <img src="images/menu/3.jpg" className="img-responsive" alt="" />
                                                        <h4>Nonummy Nibh Euismod Tincidunt ut Laoreet</h4>
                                                        <p>Posted on october 4, 2014</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./single_post.html">
                                                    <div className="news-feed">
                                                        <img src="images/menu/4.jpg" className="img-responsive" alt="" />
                                                        <h4>Nonummy Nibh Euismod Tincidunt ut Laoreet</h4>
                                                        <p>Posted on october 4, 2014</p>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>

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
