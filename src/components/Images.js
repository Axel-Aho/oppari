import React from "react";
import Gallery from 'react-photo-gallery';


export class Images extends React.Component {
    render() {
    return (
        <Gallery photos={PHOTO_SET} />
    );
    }
}

const PHOTO_SET = [
  {
    src: 'https://images.unsplash.com/photo-1445979323117-80453f573b71?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f50641e849cc1695209d820743bb875&auto=format&fit=crop&w=1053&q=80',
    width: 4,
    height: 3
  },
  {
    src: 'https://images.unsplash.com/photo-1456418047667-56bcd35b1a88?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bcabfb3c843a82bec9b006390de4d36d&auto=format&fit=crop&w=1050&q=80',
    width: 4,
    height: 3
  },
  {
    src: 'https://images.unsplash.com/photo-1469014221409-dea4fc6a6b2e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eae1eaf00299acbd42354a14f68b79f9&auto=format&fit=crop&w=1055&q=80',
    width: 2,
    height: 1
  },
  {
    src: 'https://images.unsplash.com/photo-1463183665146-ce2ed31df6b0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fe40be6b5c3edf307203998bd94d250f&auto=format&fit=crop&w=1050&q=80',
    width: 4,
    height: 3
  },
  {
    src: 'https://images.unsplash.com/photo-1490344948579-6632f4807a6a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=24d32263b207222129aaa0bd7b9b1d39&auto=format&fit=crop&w=634&q=80',
    width: 2,
    height: 3
  }
];


export default Images;
