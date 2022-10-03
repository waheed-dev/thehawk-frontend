/* eslint-disable react/no-unescaped-entities */
import MainContent from "@/components/home/MainContent";
import FetauredPost from "@/components/home/MainContent";
import Layout from "layout";


export default function Home() {
  return (
    <>
      <Layout>
  <MainContent/>

        {/* Category Posts */}

        <div class="all-cat">
          <h5><span>All Categories</span></h5>
          <div class="ac-inner">
            <div class="col-md-12">
              <div class="col-md-6">
                <div class="bl-featured-big">
                  <div class="bl-meta">
                    <span><i class="fa fa-comments-o"></i> 4 Comments</span><br/>
                      <span><i class="fa fa-heart-o"></i> 23 Likes</span>
                  </div>
                  <img src="images/1/1.jpg" class="img-responsive" alt="" />
                  <div class="bl-info">
                    <span>Entertainment</span>
                    <h3><a href="#">Claritas Est Etiam Processus Dynamicus, Qui Sequitur Mutationem </a></h3>
                    <a class="rmore" href="#">Continue Reading <i class="fa fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="allcat-feed">
                  <img src="images/1/2.jpg" class="img-responsive" alt="" />
                  <p>Technology</p>
                  <h4><a href="#">Claritas Est Etiam Processus Dynamicus, Qui Sequitur ...</a></h4>
                </div>
                <div class="space30"></div>
                <div class="allcat-feed">
                  <img src="images/1/3.jpg" class="img-responsive" alt="" />
                  <p>Sport</p>
                  <h4><a href="#">Claritas Est Etiam Processus Dynamicus, Qui Sequitur ...</a></h4>
                </div>
              </div>

              <div class="col-md-3">
                <div class="allcat-feed">
                  <img src="images/1/4.jpg" class="img-responsive" alt="" />
                  <p>Entertainment</p>
                  <h4><a href="#">Claritas Est Etiam Processus Dynamicus, Qui Sequitur ...</a></h4>
                </div>
                <div class="space30"></div>
                <div class="allcat-feed">
                  <img src="images/1/5.jpg" class="img-responsive" alt="" />
                  <p>Culture</p>
                  <h4><a href="#">Claritas Est Etiam Processus Dynamicus, Qui Sequitur ...</a></h4>
                </div>
              </div>
            </div>

            <div class="clearfix"></div>

            <div class="col-md-12">
              <div class="col-md-3">
                <div class="allcat-feed">
                  <img src="images/1/6.jpg" class="img-responsive" alt="" />
                  <p>Politic</p>
                  <h4><a href="#">Claritas Est Etiam Processus Dynamicus, Qui Sequitur ...</a></h4>
                </div>
              </div>

              <div class="col-md-3">
                <div class="allcat-feed">
                  <img src="images/1/7.jpg" class="img-responsive" alt="" />
                  <p>Business</p>
                  <h4><a href="#">Claritas Est Etiam Processus Dynamicus, Qui Sequitur ...</a></h4>
                </div>
              </div>

              <div class="col-md-3">
                <div class="allcat-feed">
                  <img src="images/1/8.jpg" class="img-responsive" alt="" />
                  <p>Uncategorized</p>
                  <h4><a href="#">Claritas Est Etiam Processus Dynamicus, Qui Sequitur ...</a></h4>
                </div>
              </div>

              <div class="col-md-3">
                <div class="allcat-feed">
                  <img src="images/1/9.jpg" class="img-responsive" alt="" />
                  <p>Travelling</p>
                  <h4><a href="#">Claritas Est Etiam Processus Dynamicus, Qui Sequitur ...</a></h4>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Banner full */}

        <div class="big-banner">
          <a href="#"><img src="images/banner/3.jpg" class="img-responsive" alt="" /></a>
        </div>


        {/* Footer */}

        <footer class="container">
          <div class="col-md-4 footer-widget footer-logo">
            <h3>Gazeta</h3>
            <br/>
              <p>
                <b>Our Office</b><br/>
                  D'Monument Building 2nd Floor<br/>
                    Freedom Street 109, Sleman 55518<br/>
                      Yogyakarta
                    </p>
                    <span class="copy">Copyright &copy; 2014 Gazeta. Web Design by <a href="#">PremiumLayersi</a></span>
          </div>
          
          <div class="col-md-4 footer-widget p-news">
            <h5>Most Commented</h5>
            <ul>
              <li>
                <img src="images/aside/1.jpg" alt="" />
                <div class="pn-info">
                  <span>Politic</span>
                  <h4><a href="./single_post.html">Lorem Ipsum Dolor Sit Amet, Consetetuer Adipiscing Elit</a></h4>
                </div>
              </li>
              <li>
                <img src="images/aside/2.jpg" alt="" />
                <div class="pn-info">
                  <span>Politic</span>
                  <h4><a href="./single_post.html">Lorem Ipsum Dolor Sit Amet, Consetetuer Adipiscing Elit</a></h4>
                </div>
              </li>
              <li>
                <img src="images/aside/3.jpg" alt="" />
                <div class="pn-info">
                  <span>Business</span>
                  <h4><a href="./single_post.html">Lorem Ipsum Dolor Sit Amet, Consetetuer Adipiscing Elit</a></h4>
                </div>
              </li>
            </ul>
          </div>

          <div class="col-md-4 footer-widget f-gallery">
            <h5>Gallery Index</h5>
            <ul>
              <li><a href="#"><img src="images/aside/2/1.jpg" class="img-responsive" alt="" /></a></li>
              <li><a href="#"><img src="images/aside/2/2.jpg" class="img-responsive" alt="" /></a></li>
              <li><a href="#"><img src="images/aside/2/3.jpg" class="img-responsive" alt="" /></a></li>
              <li><a href="#"><img src="images/aside/2/4.jpg" class="img-responsive" alt="" /></a></li>
              <li><a href="#"><img src="images/aside/2/5.jpg" class="img-responsive" alt="" /></a></li>
              <li><a href="#"><img src="images/aside/2/6.jpg" class="img-responsive" alt="" /></a></li>
              <li><a href="#"><img src="images/aside/2/7.jpg" class="img-responsive" alt="" /></a></li>
              <li><a href="#"><img src="images/aside/2/8.jpg" class="img-responsive" alt="" /></a></li>
              <li><a href="#"><img src="images/aside/2/9.jpg" class="img-responsive" alt="" /></a></li>
            </ul>
          </div>
        </footer>
        
        {/* footer fixed */}

        <div class="footer-fixed">
          <div class="row">
            <div class="col-md-6">
              <ul class="footer-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Archives</a></li>
                <li><a href="#">Contributors</a></li>
              </ul>
            </div>
            <div class="col-md-6">
              <p class="copy1">Copyright &copy; 2014 Gazeta. Web Design by PremiumLayersi <a href="#" class="fa fa-arrow-up"></a></p>
            </div>
          </div>
        </div>
    </Layout>
    </>
  )
}
