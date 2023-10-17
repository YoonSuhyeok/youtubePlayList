import type { PageProps } from "gatsby"
import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
const MainLayout = styled.div`
  dispay: flex;
  flex-direction: column;
`

const Title = styled.div`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ListBoard = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  background-color
`
const YoutubeBox = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

function moveYoutube(src: string) {
  window.location.href = `https://www.youtube.com/watch?v=${src}`;
}

function ImageComponent({ src }: { src: string }) {
  return <YoutubeBox onClick={() => {moveYoutube(src);}}>
    <img style={{borderRadius: '20px', width: '80%'}} src={"https://img.youtube.com/vi/" + src + "/0.jpg"} alt="Image"/>
  </YoutubeBox>;
};

function IndexPage() {

  const searchParams = new URLSearchParams(location.search);
  const youtubeLinks: Array<string> | null = searchParams.get("youtubeLinks") !== null 
    ? searchParams.get("youtubeLinks")!.split(",") :  null;

  return (
    <MainLayout>
      <Title>MUSIC SHARE</Title>
      <ListBoard>
        { youtubeLinks?.map( (youtubeLink, index) => {
            const vIndex = youtubeLink.indexOf('v=');
            const id = youtubeLink.substring(vIndex+2);
            return <ImageComponent src={id} key={index}/>
          })
        }
      </ListBoard>
    </MainLayout>
  )
}

export default IndexPage

