'use client';
import { Facebook, X } from '../icons/social-media';
import { FacebookShareButton, TwitterShareButton } from 'react-share';

function SocialShare() {
   const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

   return (
      <div className="flex flex-row items-center justify-center gap-2.5">
         <FacebookShareButton url={currentUrl}>
            <Facebook />
         </FacebookShareButton>
         <TwitterShareButton url={currentUrl}>
            <X />
         </TwitterShareButton>
      </div>
   );
}

export default SocialShare;
