import React from 'react';
import { AiOutlineCloudUpload, AiOutlineCheckCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import {Button} from "ui/buttons"
import {EditorFeedBackStyles, FeedBackMessage, FeedBack, FeedBackOption} from './styles'

function EditorFeedBack ({children, status, writeCompleted, ...props})  {
        const navigator = useNavigate()
  return (
        <EditorFeedBackStyles  {...props}>
          {
            !status
            ?
            <FeedBack>
            <AiOutlineCheckCircle color="#204de2" size="12rem"/>
            <FeedBackMessage>
              Product Uploaded Successfully
            </FeedBackMessage>
          </FeedBack>
          :
          <FeedBack>
            <AiOutlineCloudUpload color="#204de2" size="12rem"/>
            <FeedBackMessage>
              Uploading New Product
            </FeedBackMessage>
          </FeedBack>
          }

          <FeedBackOption>
            <Button 
            onClick={()=> writeCompleted(false)}
            disabled={status}
            >Add Another Product</Button>
            <Button
            onClick={()=> navigator('/dashboard')}
            >View All Product</Button>

          </FeedBackOption>


        </EditorFeedBackStyles>
  )
}

export default EditorFeedBack