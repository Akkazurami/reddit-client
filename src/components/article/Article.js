import React from "react";

import './Article.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import redditAlien from '../../assets/reddit-alien.png';

import { selectArticle } from "../../features/articlelist/articlesSlice";
import { useSelector } from "react-redux";
import CommentList from "../../features/commentlist/CommentList";

export default function Article() {
    const article = useSelector(selectArticle);

    return (
        <article className="article">
            <div className="title">
                <h2 className="article-title">{article.title}</h2>
                <div className="divider" />
                <div className="byline">
                    <p>Posted by <span className="author">{article.author}</span></p>
                    <p>{article.time}</p>
                </div>
            </div>
            <div className="body">
                <div className="vote">
                    <FontAwesomeIcon icon={faArrowUp} color='darkgray' />
                    <span>{article.voteCount}</span>
                    <FontAwesomeIcon icon={faArrowDown} color="darkgray" />
                </div>
                <div className="text">
                    <img src={redditAlien} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa sed elementum 
                        tempus egestas sed sed risus. Neque gravida in fermentum et sollicitudin ac. Scelerisque fermentum dui faucibus in ornare. Quis commodo odio 
                        aenean sed. Nulla facilisi etiam dignissim diam quis. Scelerisque varius morbi enim nunc faucibus. Mauris vitae ultricies leo integer malesuada 
                        nunc vel risus. Sollicitudin tempor id eu nisl nunc. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Amet nulla facilisi morbi 
                        tempus iaculis urna id. Nulla aliquet porttitor lacus luctus accumsan tortor. Tortor at auctor urna nunc id. Et odio pellentesque diam volutpat 
                        commodo sed. Augue neque gravida in fermentum et sollicitudin ac. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Diam 
                        maecenas sed enim ut sem viverra aliquet eget sit. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Mi proin sed libero enim 
                        sed faucibus. Ac odio tempor orci dapibus ultrices in iaculis nunc.</p>

                    <p>Vel risus commodo viverra maecenas accumsan. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Placerat duis ultricies lacus sed turpis. 
                        Quisque non tellus orci ac. Pulvinar etiam non quam lacus suspendisse. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Pretium 
                        vulputate sapien nec sagittis. Nulla facilisi etiam dignissim diam quis enim lobortis. Aliquam ut porttitor leo a diam sollicitudin tempor id. 
                        Vivamus arcu felis bibendum ut tristique et egestas. Orci phasellus egestas tellus rutrum. Malesuada fames ac turpis egestas integer eget. Odio 
                        tempor orci dapibus ultrices in iaculis nunc. Pretium fusce id velit ut tortor. Sem fringilla ut morbi tincidunt augue interdum velit euismod.</p>

                    <p>Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Posuere urna nec tincidunt praesent semper feugiat nibh. 
                        Mauris pharetra et ultrices neque ornare. Non consectetur a erat nam at. Etiam non quam lacus suspendisse faucibus interdum. Eget duis at tellus 
                        at. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In nulla posuere sollicitudin aliquam. Faucibus pulvinar elementum integer 
                        enim neque volutpat. Odio eu feugiat pretium nibh ipsum consequat. Laoreet sit amet cursus sit amet. Augue neque gravida in fermentum et 
                        sollicitudin. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Tellus in metus vulputate eu. Convallis convallis tellus id 
                        interdum velit laoreet id donec ultrices.</p>

                    <p>Quam adipiscing vitae proin sagittis. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Rhoncus urna neque viverra justo. Feugiat 
                        nibh sed pulvinar proin gravida hendrerit. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Vehicula ipsum a arcu cursus vitae congue. 
                        Ultrices dui sapien eget mi proin. Facilisi etiam dignissim diam quis enim. Semper feugiat nibh sed pulvinar. Molestie a iaculis at erat 
                        pellentesque. Vivamus at augue eget arcu. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Blandit aliquam etiam erat velit 
                        scelerisque in dictum. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Integer enim neque volutpat ac tincidunt 
                        vitae semper quis. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Massa placerat duis ultricies lacus sed 
                        turpis tincidunt. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Consectetur libero id faucibus nisl tincidunt eget nullam non 
                        nisi. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat.</p>

                    <p>Egestas diam in arcu cursus euismod quis viverra nibh. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. At consectetur lorem 
                        donec massa sapien faucibus et molestie. At quis risus sed vulputate odio ut enim. Rhoncus dolor purus non enim praesent elementum facilisis leo. 
                        Augue interdum velit euismod in pellentesque massa placerat. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Sed risus pretium quam 
                        vulputate dignissim suspendisse in est. Auctor elit sed vulputate mi. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Pellentesque 
                        habitant morbi tristique senectus et netus et malesuada fames. Diam vel quam elementum pulvinar etiam non quam lacus. Felis donec et odio 
                        pellentesque diam volutpat commodo sed. Integer eget aliquet nibh praesent tristique. Parturient montes nascetur ridiculus mus mauris vitae 
                        ultricies leo. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Facilisi etiam dignissim diam quis enim lobortis 
                        scelerisque fermentum. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Erat pellentesque adipiscing commodo elit at imperdiet 
                        dui accumsan sit. Dolor purus non enim praesent elementum facilisis leo vel.</p>
                </div>
            </div>
            <CommentList />
        </article>
    )
}