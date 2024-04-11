// import * as React from "react"
// import Svg, { Path, Rect, G, Defs, Mask } from "react-native-svg"

// function KYCWaiting(props) {
//     return (
//         <Svg
//             width="80"
//             height="72"
//             viewBox="0 0 80 72"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             {...props}
//         >
//             <Path d="M12.0633 40.4497C8.41092 38.4069 8.35629 32.5608 11.4705 30.9217L33.5846 20.3768C37.2432 18.2647 43.1749 18.2647 46.8334 20.3768L68.7836 30.8125C72.171 32.5062 72.0132 38.3376 68.3547 40.4497L46.8334 52.874C43.1749 54.9861 37.2432 54.9861 33.5846 52.874L12.0633 40.4497Z" fill="#FF536C" />
//             <G filter="url(#filter0_d_5693_69172)">
//                 <Rect x="0.283902" width="39.8204" height="39.8204" rx="7.48512" transform="matrix(0.866043 -0.49997 0.866043 0.49997 5.47553 34.4726)" fill="url(#paint0_linear_5693_69172)" stroke="url(#paint1_linear_5693_69172)" stroke-width="0.327815" />
//             </G>
//             <G filter="url(#filter1_d_5693_69172)">
//                 <Path d="M13.5898 27.3463L29.827 17.9727C35.0535 14.9554 43.5274 14.9554 48.7539 17.9727L64.991 27.3463L43.0758 39.9979C40.9852 41.2048 37.5957 41.2048 35.5051 39.9979L13.5898 27.3463Z" fill="#FF2228" />
//             </G>
//             <G filter="url(#filter2_b_5693_69172)">
//                 <Path d="M12.0838 26.4629C8.43143 24.42 8.3768 18.574 11.491 16.9349L33.6051 6.38998C37.2637 4.27789 43.1954 4.27789 46.8539 6.38998L68.8041 16.8257C72.1915 18.5194 72.0337 24.3508 68.3752 26.4629L46.8539 38.8872C43.1954 40.9993 37.2637 40.9993 33.6051 38.8872L12.0838 26.4629Z" fill="white" fill-opacity="0.5" />
//             </G>
//             <G filter="url(#filter3_b_5693_69172)">
//                 <Rect x="0.283902" width="39.8204" height="39.8204" rx="7.48512" transform="matrix(0.866043 -0.49997 0.866043 0.49997 5.49702 20.4858)" fill="white" fill-opacity="0.5" stroke="url(#paint2_linear_5693_69172)" stroke-width="0.327815" />
//             </G>
//             <G filter="url(#filter4_i_5693_69172)">
//                 <Mask id="path-6-inside-1_5693_69172" fill="white">
//                     <Path d="M54.3453 19.0747C54.127 19.2171 53.848 19.3307 53.523 19.3997L42.9129 21.6056C42.3 21.7316 41.6429 21.667 41.1844 21.4346L32.4188 16.9915C31.6998 16.627 31.6761 15.966 32.3661 15.516C33.056 15.0659 34.1995 14.9965 34.9185 15.3609L42.9442 19.429L52.5641 17.4281C53.5256 17.2298 54.5195 17.5075 54.7845 18.0514C54.9577 18.4115 54.7702 18.7975 54.3453 19.0747Z" />
//                 </Mask>
//                 <Path d="M54.3453 19.0747C54.127 19.2171 53.848 19.3307 53.523 19.3997L42.9129 21.6056C42.3 21.7316 41.6429 21.667 41.1844 21.4346L32.4188 16.9915C31.6998 16.627 31.6761 15.966 32.3661 15.516C33.056 15.0659 34.1995 14.9965 34.9185 15.3609L42.9442 19.429L52.5641 17.4281C53.5256 17.2298 54.5195 17.5075 54.7845 18.0514C54.9577 18.4115 54.7702 18.7975 54.3453 19.0747Z" fill="#FF788D" />
//                 <Path d="M53.523 19.3997L53.5382 19.4288L53.5386 19.4287L53.523 19.3997ZM42.9129 21.6056L42.9279 21.6348L42.9281 21.6347L42.9129 21.6056ZM42.9442 19.429L42.9076 19.4529L42.93 19.4642L42.9594 19.4581L42.9442 19.429ZM52.5641 17.4281L52.549 17.399L52.5488 17.399L52.5641 17.4281ZM54.7845 18.0514L54.8361 18.0414L54.836 18.0413L54.7845 18.0514ZM54.3063 19.055C54.0942 19.1933 53.8232 19.3036 53.5074 19.3707L53.5386 19.4287C53.8727 19.3578 54.1597 19.241 54.3843 19.0945L54.3063 19.055ZM53.5078 19.3706L42.8976 21.5765L42.9281 21.6347L53.5382 19.4288L53.5078 19.3706ZM42.8978 21.5765C42.3028 21.6988 41.6654 21.636 41.221 21.4107L41.1478 21.4585C41.6204 21.698 42.2973 21.7644 42.9279 21.6348L42.8978 21.5765ZM41.221 21.4107L32.4554 16.9676L32.3822 17.0154L41.1478 21.4585L41.221 21.4107ZM32.4554 16.9676C31.7587 16.6145 31.7346 15.9731 32.4051 15.5357L32.3271 15.4962C31.6177 15.9589 31.6408 16.6396 32.3822 17.0154L32.4554 16.9676ZM32.4051 15.5357C33.0755 15.0984 34.1852 15.0317 34.8819 15.3848L34.9551 15.3371C34.2138 14.9613 33.0365 15.0335 32.3271 15.4962L32.4051 15.5357ZM34.8819 15.3848L42.9076 19.4529L42.9808 19.4051L34.9551 15.3371L34.8819 15.3848ZM42.9594 19.4581L52.5793 17.4572L52.5488 17.399L42.929 19.3999L42.9594 19.4581ZM52.5791 17.4573C53.5127 17.2647 54.4761 17.5344 54.733 18.0615L54.836 18.0413C54.5629 17.4807 53.5385 17.1948 52.549 17.399L52.5791 17.4573ZM54.7329 18.0614C54.9009 18.4108 54.7192 18.7856 54.3063 19.055L54.3843 19.0945C54.8213 18.8094 55.0144 18.4122 54.8361 18.0414L54.7329 18.0614Z" fill="url(#paint3_linear_5693_69172)" mask="url(#path-6-inside-1_5693_69172)" />
//             </G>
//             <Defs>
//                 <filter id="filter0_d_5693_69172" x="0.57662" y="16.498" width="79.2618" height="55.3342" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
//                     <feFlood flood-opacity="0" result="BackgroundImageFix" />
//                     <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
//                     <feOffset dy="10.9272" />
//                     <feGaussianBlur stdDeviation="4.37087" />
//                     <feComposite in2="hardAlpha" operator="out" />
//                     <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.343982 0 0 0 0 0.448724 0 0 0 0.5 0" />
//                     <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5693_69172" />
//                     <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5693_69172" result="shape" />
//                 </filter>
//                 <filter id="filter1_d_5693_69172" x="8.78189" y="14.617" width="61.0173" height="34.8093" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
//                     <feFlood flood-opacity="0" result="BackgroundImageFix" />
//                     <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
//                     <feOffset dy="3.71524" />
//                     <feGaussianBlur stdDeviation="2.40398" />
//                     <feComposite in2="hardAlpha" operator="out" />
//                     <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.188235 0 0 0 0 0.219608 0 0 0 1 0" />
//                     <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5693_69172" />
//                     <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5693_69172" result="shape" />
//                 </filter>
//                 <filter id="filter2_b_5693_69172" x="4.87327" y="0.435039" width="70.7339" height="44.4071" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
//                     <feFlood flood-opacity="0" result="BackgroundImageFix" />
//                     <feGaussianBlur in="BackgroundImage" stdDeviation="2.18543" />
//                     <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_5693_69172" />
//                     <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_5693_69172" result="shape" />
//                 </filter>
//                 <filter id="filter3_b_5693_69172" x="4.96897" y="-1.85964" width="70.5201" height="44.407" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
//                     <feFlood flood-opacity="0" result="BackgroundImageFix" />
//                     <feGaussianBlur in="BackgroundImage" stdDeviation="2.18543" />
//                     <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_5693_69172" />
//                     <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_5693_69172" result="shape" />
//                 </filter>
//                 <filter id="filter4_i_5693_69172" x="31.8633" y="15.1273" width="22.9854" height="6.78893" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
//                     <feFlood flood-opacity="0" result="BackgroundImageFix" />
//                     <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
//                     <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
//                     <feOffset dy="0.574769" />
//                     <feGaussianBlur stdDeviation="0.123621" />
//                     <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
//                     <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
//                     <feBlend mode="normal" in2="shape" result="effect1_innerShadow_5693_69172" />
//                 </filter>
//                 <linearGradient id="paint0_linear_5693_69172" x1="7.52904" y1="33.6036" x2="6.29916" y2="16.0373" gradientUnits="userSpaceOnUse">
//                     <stop stop-color="#FF6C7C" />
//                     <stop offset="1" stop-color="#FF7A90" />
//                 </linearGradient>
//                 <linearGradient id="paint1_linear_5693_69172" x1="3.47871" y1="16.3305" x2="21.1046" y2="32.8617" gradientUnits="userSpaceOnUse">
//                     <stop stop-color="white" stop-opacity="0.43" />
//                     <stop offset="0.846595" stop-color="white" stop-opacity="0.44" />
//                     <stop offset="1" stop-color="white" stop-opacity="0" />
//                 </linearGradient>
//                 <linearGradient id="paint2_linear_5693_69172" x1="4.84568" y1="17.5882" x2="23.1738" y2="34.932" gradientUnits="userSpaceOnUse">
//                     <stop stop-color="white" stop-opacity="0.09" />
//                     <stop offset="0.846595" stop-color="white" stop-opacity="0.79" />
//                     <stop offset="1" stop-color="white" stop-opacity="0.17" />
//                 </linearGradient>
//                 <linearGradient id="paint3_linear_5693_69172" x1="34.3541" y1="16.304" x2="50.3821" y2="11.8127" gradientUnits="userSpaceOnUse">
//                     <stop stop-color="white" stop-opacity="0.25" />
//                     <stop offset="1" stop-color="white" stop-opacity="0" />
//                 </linearGradient>
//             </Defs>
//         </Svg>
//     )
// }

// export default KYCWaiting;


const KYCWaiting = `<svg width="80" height="72" viewBox="0 0 80 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0633 40.4497C8.41092 38.4069 8.35629 32.5608 11.4705 30.9217L33.5846 20.3768C37.2432 18.2647 43.1749 18.2647 46.8334 20.3768L68.7836 30.8125C72.171 32.5062 72.0132 38.3376 68.3547 40.4497L46.8334 52.874C43.1749 54.9861 37.2432 54.9861 33.5846 52.874L12.0633 40.4497Z" fill="#FF536C"/>
<g filter="url(#filter0_d_5693_69172)">
<rect x="0.283902" width="39.8204" height="39.8204" rx="7.48512" transform="matrix(0.866043 -0.49997 0.866043 0.49997 5.47553 34.4726)" fill="url(#paint0_linear_5693_69172)" stroke="url(#paint1_linear_5693_69172)" stroke-width="0.327815"/>
</g>
<g filter="url(#filter1_d_5693_69172)">
<path d="M13.5898 27.3463L29.827 17.9727C35.0535 14.9554 43.5274 14.9554 48.7539 17.9727L64.991 27.3463L43.0758 39.9979C40.9852 41.2048 37.5957 41.2048 35.5051 39.9979L13.5898 27.3463Z" fill="#FF2228"/>
</g>
<g filter="url(#filter2_b_5693_69172)">
<path d="M12.0838 26.4629C8.43143 24.42 8.3768 18.574 11.491 16.9349L33.6051 6.38998C37.2637 4.27789 43.1954 4.27789 46.8539 6.38998L68.8041 16.8257C72.1915 18.5194 72.0337 24.3508 68.3752 26.4629L46.8539 38.8872C43.1954 40.9993 37.2637 40.9993 33.6051 38.8872L12.0838 26.4629Z" fill="white" fill-opacity="0.5"/>
</g>
<g filter="url(#filter3_b_5693_69172)">
<rect x="0.283902" width="39.8204" height="39.8204" rx="7.48512" transform="matrix(0.866043 -0.49997 0.866043 0.49997 5.49702 20.4858)" fill="white" fill-opacity="0.5" stroke="url(#paint2_linear_5693_69172)" stroke-width="0.327815"/>
</g>
<g filter="url(#filter4_i_5693_69172)">
<mask id="path-6-inside-1_5693_69172" fill="white">
<path d="M54.3453 19.0747C54.127 19.2171 53.848 19.3307 53.523 19.3997L42.9129 21.6056C42.3 21.7316 41.6429 21.667 41.1844 21.4346L32.4188 16.9915C31.6998 16.627 31.6761 15.966 32.3661 15.516C33.056 15.0659 34.1995 14.9965 34.9185 15.3609L42.9442 19.429L52.5641 17.4281C53.5256 17.2298 54.5195 17.5075 54.7845 18.0514C54.9577 18.4115 54.7702 18.7975 54.3453 19.0747Z"/>
</mask>
<path d="M54.3453 19.0747C54.127 19.2171 53.848 19.3307 53.523 19.3997L42.9129 21.6056C42.3 21.7316 41.6429 21.667 41.1844 21.4346L32.4188 16.9915C31.6998 16.627 31.6761 15.966 32.3661 15.516C33.056 15.0659 34.1995 14.9965 34.9185 15.3609L42.9442 19.429L52.5641 17.4281C53.5256 17.2298 54.5195 17.5075 54.7845 18.0514C54.9577 18.4115 54.7702 18.7975 54.3453 19.0747Z" fill="#FF788D"/>
<path d="M53.523 19.3997L53.5382 19.4288L53.5386 19.4287L53.523 19.3997ZM42.9129 21.6056L42.9279 21.6348L42.9281 21.6347L42.9129 21.6056ZM42.9442 19.429L42.9076 19.4529L42.93 19.4642L42.9594 19.4581L42.9442 19.429ZM52.5641 17.4281L52.549 17.399L52.5488 17.399L52.5641 17.4281ZM54.7845 18.0514L54.8361 18.0414L54.836 18.0413L54.7845 18.0514ZM54.3063 19.055C54.0942 19.1933 53.8232 19.3036 53.5074 19.3707L53.5386 19.4287C53.8727 19.3578 54.1597 19.241 54.3843 19.0945L54.3063 19.055ZM53.5078 19.3706L42.8976 21.5765L42.9281 21.6347L53.5382 19.4288L53.5078 19.3706ZM42.8978 21.5765C42.3028 21.6988 41.6654 21.636 41.221 21.4107L41.1478 21.4585C41.6204 21.698 42.2973 21.7644 42.9279 21.6348L42.8978 21.5765ZM41.221 21.4107L32.4554 16.9676L32.3822 17.0154L41.1478 21.4585L41.221 21.4107ZM32.4554 16.9676C31.7587 16.6145 31.7346 15.9731 32.4051 15.5357L32.3271 15.4962C31.6177 15.9589 31.6408 16.6396 32.3822 17.0154L32.4554 16.9676ZM32.4051 15.5357C33.0755 15.0984 34.1852 15.0317 34.8819 15.3848L34.9551 15.3371C34.2138 14.9613 33.0365 15.0335 32.3271 15.4962L32.4051 15.5357ZM34.8819 15.3848L42.9076 19.4529L42.9808 19.4051L34.9551 15.3371L34.8819 15.3848ZM42.9594 19.4581L52.5793 17.4572L52.5488 17.399L42.929 19.3999L42.9594 19.4581ZM52.5791 17.4573C53.5127 17.2647 54.4761 17.5344 54.733 18.0615L54.836 18.0413C54.5629 17.4807 53.5385 17.1948 52.549 17.399L52.5791 17.4573ZM54.7329 18.0614C54.9009 18.4108 54.7192 18.7856 54.3063 19.055L54.3843 19.0945C54.8213 18.8094 55.0144 18.4122 54.8361 18.0414L54.7329 18.0614Z" fill="url(#paint3_linear_5693_69172)" mask="url(#path-6-inside-1_5693_69172)"/>
</g>
<defs>
<filter id="filter0_d_5693_69172" x="0.57662" y="16.498" width="79.2618" height="55.3342" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="10.9272"/>
<feGaussianBlur stdDeviation="4.37087"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.343982 0 0 0 0 0.448724 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5693_69172"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5693_69172" result="shape"/>
</filter>
<filter id="filter1_d_5693_69172" x="8.78189" y="14.617" width="61.0173" height="34.8093" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3.71524"/>
<feGaussianBlur stdDeviation="2.40398"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.188235 0 0 0 0 0.219608 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5693_69172"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5693_69172" result="shape"/>
</filter>
<filter id="filter2_b_5693_69172" x="4.87327" y="0.435039" width="70.7339" height="44.4071" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImage" stdDeviation="2.18543"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_5693_69172"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_5693_69172" result="shape"/>
</filter>
<filter id="filter3_b_5693_69172" x="4.96897" y="-1.85964" width="70.5201" height="44.407" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImage" stdDeviation="2.18543"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_5693_69172"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_5693_69172" result="shape"/>
</filter>
<filter id="filter4_i_5693_69172" x="31.8633" y="15.1273" width="22.9854" height="6.78893" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="0.574769"/>
<feGaussianBlur stdDeviation="0.123621"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_5693_69172"/>
</filter>
<linearGradient id="paint0_linear_5693_69172" x1="7.52904" y1="33.6036" x2="6.29916" y2="16.0373" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF6C7C"/>
<stop offset="1" stop-color="#FF7A90"/>
</linearGradient>
<linearGradient id="paint1_linear_5693_69172" x1="3.47871" y1="16.3305" x2="21.1046" y2="32.8617" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.43"/>
<stop offset="0.846595" stop-color="white" stop-opacity="0.44"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint2_linear_5693_69172" x1="4.84568" y1="17.5882" x2="23.1738" y2="34.932" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.09"/>
<stop offset="0.846595" stop-color="white" stop-opacity="0.79"/>
<stop offset="1" stop-color="white" stop-opacity="0.17"/>
</linearGradient>
<linearGradient id="paint3_linear_5693_69172" x1="34.3541" y1="16.304" x2="50.3821" y2="11.8127" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.25"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>`


export default KYCWaiting;