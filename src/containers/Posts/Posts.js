import React, { useEffect } from 'react';
import Post from '../../components/Post/Post';
import PodcastTile from '../../components/PodcastTile/PodcastTile';
import FullPost from '../../components/FullPost/FullPost';
import AboutPost from '../../components/AboutPost/AboutPost';
import TeamPost from '../../components/TeamPost/TeamPost';
import LatestNews from '../../components/Latest/LatestNews/LatestNews';
import LatestPodcast from '../../components/Latest/LatestPodcast/LatestPodcast';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import RecommendedPosts from '../../components/side/Recommended/RecommendedPosts';
import RecentPosts from '../../components/side/Recent/RecentPosts';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import { Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import ComingSoon from '../../components/ComingSoon/ComingSoon';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import bannerImg from '../../assets/images/rollinKunzArt/Banner.jpg';
import Banner from '../../components/UI/Banner/Banner';

const Posts = props => {

    let sizePodcast = 1;    
    let posts = <Spinner />;
    let key = 0;
    let location = useLocation();  

    const searchPost = ( posts, pageTitle ) => {

        for (let i = 0; i < posts.length; i++){
            if(posts[i]["wp:post_name"][0]===pageTitle){
                return i;
            }
        }                
    }

    const searchLatest = ( posts, amountToReturn ) => {

        const news = [];

        for(let i=0;i<amountToReturn;i++){
            news.push({
                ...posts[i],
                latest: i==0? true:false,
                id:i                                                
            })
        };

        return news;
    }

    const searchPostBasedOnCategory = (posts, category) => {

        for(let i=1;i<posts.length;i++){

            for (let j=0; j < posts[i]["category"].length; j++) {
                                    
                if(posts[i]["category"][j]["$"]["nicename"]===category){
                                            
                    return i;                        
                }
            }    
        }        
    }

    const searchPostsBasedOnCategory = (posts, category) => {

        const postsFromCategory = [];

        for(let i=0;i<posts.length;i++){

            for (let j=0; j < posts[i]["category"].length; j++) {
                                    
                if(posts[i]["category"][j]["$"]["nicename"]===category){
                                            
                    postsFromCategory.push(posts[i]);
                }
            }    
        }          
        
        sizePodcast = postsFromCategory.length;
        return postsFromCategory
    }

    const searchRecommendedPosts = (postToRead, posts) => {

        const RecommendedPodcast = [];

        for(let i=0;i<posts.length;i++){

            let  amountMatchCategories = 0;

            if(posts[i]!==postToRead){
                for (let j=0; j < postToRead["category"].length; j++) {
                    for (let k=0; k < posts[i]["category"].length; k++) {
                        
                        if(postToRead["category"][j]["$"]["nicename"]===posts[i]["category"][k]["$"]["nicename"]){                      
                            amountMatchCategories += 1;                    
                        }
                    }
                }

                RecommendedPodcast.push({            
                    ...posts[i],
                    amountMatchCategories: amountMatchCategories,
                    id:i                                                
                })
            }
        }       
        
        RecommendedPodcast.sort((a,b)=>{
            return b.amountMatchCategories - a.amountMatchCategories || new Date(b["pubDate"][0]) - new Date(a["pubDate"][0])
        });

        return RecommendedPodcast;
    }

    useEffect(()=> {
        if (props.type ==="PODCAST"){
            props.onSetCurrentCategorySize(sizePodcast);        
        }        
    },[props.podcast,props.currentCategoryPodcast]);

    const searchLatestPodcast = ( posts, amountToReturn ) => {

        const podcast = [];

        podcast.push({            
            ...posts[0],
            latest: true,
            id:0                                                
        })

        const categories =["the-rolistes-podcast","the-rolistes-present","cafe-rolistes","film-studies"];

        let indexPost = 0;

        for(let i=0;i<categories.length;i++){

            indexPost = searchPostBasedOnCategory (posts,categories[i]);

            podcast.push({            
                ...posts[indexPost],
                latest: true,
                id: i+1                                                
            })
        }                   

        return podcast;            
    }
    
    if(!props.loading & props.loaded){
        
        switch (props.type){
            case "NEWS":
                const currentNews = props.news.slice(props.indexOfFirstPost,props.indexOfLastPost)
                
                posts = currentNews.map(news => (
                    <Post
                        key= {news.id}
                        cover={news.cover}
                        excerpt= {news.excerpt} 
                        author= {news["dc:creator"][0]}                                           
                        title= {news["title"]}
                        article= {news["content:encoded"][0]}
                        date= {news["pubDate"][0]}
                        postName={news["wp:post_name"][0]}
                        url = {news.url}/>            
                    ));
                break;

            case "GONDO":
                const currentParisGondo = props.gondo.slice(props.indexOfFirstPost,props.indexOfLastPost)
                
                posts = currentParisGondo.map(gondo => (
                    <Post
                        key= {gondo.id}
                        cover={gondo.cover}
                        excerpt= {gondo.excerpt} 
                        author= {gondo["dc:creator"][0]}                                           
                        title= {gondo["title"]}
                        article= {gondo["content:encoded"][0]}
                        date= {gondo["pubDate"][0]}
                        postName={gondo["wp:post_name"][0]}
                        url = {gondo.url}/>            
                    ));
                break;
            
            case "PODCAST":                                
                const currentPodcast = searchPostsBasedOnCategory(props.podcast, props.filterCategory)
                    .slice(props.indexOfFirstPost,props.indexOfLastPost);
                
                posts =currentPodcast.map ( podcast => (                               
                    <PodcastTile 
                        key= {podcast.id}
                        cover={podcast.cover}
                        date= {podcast["pubDate"][0]}                        
                        title= {podcast["title"]}
                        content= {podcast["content:encoded"][0]}
                        postName={podcast["wp:post_name"][0]}
                        url = {podcast.url}/>           
                    ));
                break;
            
            case "FULLNEWS":
                key = searchPost(props.news, props.pageTitle);
                const news= props.news;
                posts =                          
                    <FullPost 
                        key= {news[key].id}
                        cover={news[key].cover}
                        author= {news[key]["dc:creator"][0]}
                        title= {news[key]["title"]}
                        content= {news[key]["content:encoded"][0]}
                        date= {news[key]["pubDate"][0]}/>;
                break;

            case "INTROGONDO":
                const introGondo= props.introGondo;
                posts =                          
                    <FullPost 
                        key= {introGondo[0].id}
                        cover={introGondo[0].cover}
                        author= {introGondo[0]["dc:creator"][0]}
                        title= {introGondo[0]["title"]}
                        content= {introGondo[0]["content:encoded"][0]}
                        date= {introGondo[0]["pubDate"][0]}/>;
                break;

            case "ABOUT":
                const about= props.about;                
                posts =                          
                    <AboutPost 
                        key= {about[0].id}
                        cover={about[0].cover}
                        author= {about[0]["dc:creator"][0]}
                        title= {about[0]["title"]}
                        content= {about[0]["content:encoded"][0]}
                        date= {about[0]["pubDate"][0]}/>;
                break;

            case "THETEAM":
                const theTeam= props.theTeam;
                posts = theTeam.map ( post => (                               
                    <TeamPost 
                        key= {post.id}
                        cover={post.cover}
                        author= {post["dc:creator"][0]}
                        title= {post["title"]}
                        content= {post["content:encoded"][0]}
                        date= {post["pubDate"][0]}/>       
                    ));    
                break;

            case "FULLPODCAST":
                key = searchPost(props.podcast, props.pageTitle);
                const podcast= props.podcast;                               
                posts =                          
                <FullPost 
                    key= {podcast[key].id}
                    cover={podcast[key].cover}
                    author= {podcast[key]["dc:creator"][0]}
                    date= {podcast[key]["pubDate"][0]}
                    title= {podcast[key]["title"]}
                    content= {podcast[key]["content:encoded"][0]}/>;                                 
                break;

            case "LATEST":
                
                const latestNews= searchLatest(props.news, 5); 
                const latestPodcast= searchLatestPodcast(props.podcast, 5);
                const latestComingSoon = props.comingSoon[0];

                posts = 
                <Aux>
                    <ComingSoon latestComingSoon={latestComingSoon} />
                    <Banner/>
                    <LatestPodcast 
                    podcast={latestPodcast} /> 
                    <LatestNews 
                    news={latestNews}/> 
                </Aux>                                                          
                break;

            case "RECENT":
                const recentPosts= searchLatest(props.podcast, 2);                            

                posts = <RecentPosts
                    recentPosts={recentPosts}
                    url = {recentPosts.url}/>;
                break;

            case "RECOMMENDED":
                
                if(props.postType==="FULLPODCAST") {
                    key = searchPost(props.podcast, props.pageTitle);                
                } 
                else {
                    key = searchPost(props.news, props.pageTitle);
                }         
                
                const recommendedPosts= searchRecommendedPosts(props.podcast[key],props.podcast).slice(0, 2);
                posts = <RecommendedPosts
                    recommendedPosts={recommendedPosts}
                    url = {recommendedPosts.url}/>;                
                break;
        }        
    }

    return (
        <Aux>
            {posts}
        </Aux>
    );
}

const mapStateToProps = state => {
    return {
        news: state.posts.news,
        podcast: state.posts.podcast,
        gondo: state.posts.gondo,
        introGondo: state.posts.introGondo,
        comingSoon: state.posts.comingSoon,
        about: state.posts.about,
        theTeam: state.posts.theTeam,
        loading: state.posts.loading,
        loaded: state.posts.loaded,
        currentCategoryPodcast: state.posts.currentCategoryPodcast
    };
};

const mapDispatchToProps = dispatch => {
    return {      
        onSetCurrentCategorySize: (size) => dispatch (actions.setCurrentCategorySize(size))    
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(Posts);