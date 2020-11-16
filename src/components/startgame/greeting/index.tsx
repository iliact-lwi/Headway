import React from 'react';

import { useHistory } from 'react-router-dom';

import ButtonComponent from '../../../components/universal/ButtonComponent';

const GreetingComponent: React.FunctionComponent = () => {
    const history = useHistory();

    const startGameHandler = () => {
        history.push('/game');
    }

    return (
        <div className="greeting">
            <div className="hand">
                <svg className="hand-svg" width="198" height="156" viewBox="0 0 198 156" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M151.954 89.9477C154.834 79.6233 157.138 69.1386 158.866 58.5578C160.626 54.5499 162.61 50.6381 164.786 46.8547C167.474 42.2055 170.641 37.909 173.585 33.4202C176.209 29.4123 178.577 24.9876 178.865 20.146C179.089 16.3626 178.257 12.2905 175.729 9.34071C172.945 6.07026 168.658 4.78773 164.466 5.17249C159.922 5.55725 155.794 7.96199 152.274 10.7515C148.466 13.7975 144.914 17.2603 141.555 20.7552C135.059 27.5206 129.299 34.9913 124.339 42.943C120.691 41.5322 117.171 39.8328 113.652 38.1656C108.532 35.7287 103.348 33.5805 97.8442 32.1377C88.0205 29.5726 76.949 28.5786 67.3173 32.3621C58.6137 35.7929 51.2859 43.6163 51.1579 53.3635C51.0939 57.2111 52.2139 60.5777 54.0698 63.5276C50.102 65.7079 46.7421 68.818 44.6622 72.9221C42.5503 77.0903 42.1343 82.1884 43.8622 86.549C44.5022 88.1521 45.3982 89.595 46.4861 90.8775C43.2542 93.8273 40.3423 97.5787 38.9984 101.779C37.7184 105.755 38.4544 109.763 40.5663 113.322C41.1743 114.316 41.8783 115.246 42.6463 116.143C39.0944 119.253 37.9424 124.352 38.9984 128.904C40.2144 134.259 44.1182 138.427 48.3101 141.73C51.5419 144.263 54.9978 146.539 58.5817 148.559C60.3736 149.681 62.2615 150.74 64.1495 151.701C66.1654 152.695 68.2773 153.625 70.4212 154.266C71.8932 154.715 73.3971 155.1 74.9011 155.293C75.925 155.421 76.949 155.485 77.9729 155.453C78.4849 155.453 78.9969 155.421 79.4769 155.357C80.8848 155.228 82.2928 154.844 83.6687 154.395C84.6287 154.074 85.5566 153.657 86.4526 153.144C87.1566 152.76 87.8606 152.343 88.5005 151.894C92.5324 152.856 96.6282 153.401 100.788 153.337C109.652 153.176 117.971 149.585 124.691 143.846C132.083 137.562 137.299 129.193 141.267 120.408C145.714 110.661 149.042 100.304 151.954 89.9477Z" fill="#EF9E81"/>
                    <path d="M43.1515 117.176C49.2771 121.125 55.6273 124.754 62.1378 127.997C65.345 129.603 68.6163 131.144 71.9517 132.493C75.2551 133.842 78.6547 134.998 82.1826 135.704C85.4539 136.346 89.0138 136.668 92.3172 136.025C94.3698 135.64 96.5827 135.126 98.3466 133.97C99.405 133.296 100.303 132.429 101.137 131.498C101.875 130.663 102.644 129.763 103.189 128.8C104.055 127.227 104.536 125.461 104.729 123.694C105.274 119.231 103.831 114.607 100.239 111.781C99.7257 111.363 99.1484 110.978 98.5711 110.657C98.1221 110.4 97.7373 111.074 98.1542 111.363C100.239 112.584 101.907 114.318 102.933 116.533C103.799 118.396 104.12 120.515 104.023 122.57C103.927 124.337 103.574 126.103 102.837 127.708C102.516 128.415 102.099 129.057 101.618 129.667C100.752 130.791 99.7899 131.851 98.6994 132.75C97.16 134.002 95.2678 134.548 93.3755 134.998C90.2325 135.768 86.9291 135.672 83.7541 135.19C76.8908 134.131 70.4444 131.176 64.2546 128.158C57.9044 125.075 51.7146 121.639 45.7493 117.882C45.0116 117.433 44.306 116.951 43.5684 116.501C43.1194 116.212 42.7025 116.919 43.1515 117.176Z" fill="#C4674E"/>
                    <path d="M49.1168 92.0644C56.2688 95.4361 63.4849 98.7115 70.701 101.858C77.6284 104.909 84.62 107.96 91.9324 109.983C95.4602 110.978 99.2447 111.909 102.933 111.267C105.659 110.786 108.161 109.405 110.085 107.446C112.041 105.455 113.452 102.886 114.03 100.124C114.382 98.5189 114.254 96.8491 113.966 95.2435C113.1 90.5873 110.277 86.3806 106.172 84.0365C105.563 83.6833 104.921 83.3943 104.248 83.1052C103.767 82.9126 103.574 83.6833 104.023 83.8759C108.481 85.7384 111.688 89.5918 112.907 94.2159C113.324 95.8215 113.549 97.5234 113.356 99.1611C113.1 101.537 111.913 103.946 110.438 105.808C108.738 107.895 106.461 109.469 103.863 110.208C100.431 111.139 96.8393 110.432 93.4718 109.533C86.384 107.703 79.6169 104.845 72.9139 101.923C65.9223 98.8721 58.9949 95.7573 52.0674 92.5461C51.2015 92.1286 50.3355 91.7433 49.4696 91.3258C49.0527 91.1653 48.6678 91.8717 49.1168 92.0644Z" fill="#C4674E"/>
                    <path d="M56.6536 64.8657C64.7677 68.2374 72.6252 72.1872 80.6111 75.7516C84.5559 77.5177 88.5648 79.1875 92.6379 80.6647C96.7751 82.1739 101.073 83.6511 105.467 84.1327C109.283 84.5823 113.356 84.0685 116.595 81.8207C118.071 80.7931 119.321 79.4444 120.123 77.8388C120.957 76.2012 121.342 74.3387 121.31 72.5083C121.31 68.7191 119.61 65.2189 117.109 62.4252C114.382 59.3746 110.79 57.2552 107.07 55.6175C103.895 54.2046 100.624 53.0486 97.3845 51.7963C94.2094 50.576 91.0985 49.2915 88.0196 47.8786C87.0254 47.4291 86.0312 46.9795 85.0369 46.4978C84.5879 46.273 84.171 46.9795 84.62 47.2043C87.9555 48.7456 91.323 50.2228 94.7226 51.6036C97.5769 52.7275 100.431 53.8193 103.286 54.9111C107.102 56.3882 110.919 58.0902 114.126 60.6912C116.948 63.0032 119.354 66.086 120.187 69.6825C121.021 73.2148 120.284 77.1966 117.686 79.8298C115.088 82.4629 111.271 83.4905 107.647 83.4263C103.286 83.3621 98.9881 81.9491 94.915 80.5683C90.8419 79.1875 86.865 77.582 82.9523 75.88C75.1268 72.4762 67.4938 68.6228 59.6363 65.2511C58.7062 64.8336 57.744 64.4483 56.814 64.0629C56.397 63.8703 56.1725 64.673 56.6536 64.8657Z" fill="#C4674E"/>
                    <path d="M89.1742 150.315C90.3609 147.874 90.842 145.081 90.5212 142.383C90.3609 141.067 90.0402 139.75 89.527 138.498C89.078 137.406 88.5007 135.961 87.282 135.576C86.8009 135.415 86.5764 136.186 87.0575 136.346C87.6027 136.507 87.9235 137.053 88.18 137.534C88.4687 138.08 88.7252 138.626 88.9497 139.204C89.3667 140.36 89.6553 141.548 89.7515 142.769C89.976 145.209 89.527 147.682 88.4687 149.897C88.2442 150.379 88.9497 150.797 89.1742 150.315Z" fill="#C4674E"/>
                    <path d="M102.259 77.9672C102.42 73.022 104.568 68.2374 108.128 64.8336C108.513 64.4803 107.936 63.9023 107.551 64.2555C103.831 67.82 101.618 72.7973 101.425 77.9351C101.458 78.481 102.259 78.481 102.259 77.9672Z" fill="#C4674E"/>
                    <path d="M106.878 65.9254C108.674 66.4392 110.47 67.0493 112.105 67.9805C113.42 68.7191 114.639 69.8109 114.896 71.3844C115.152 72.9257 114.447 74.4992 113.324 75.5268C112.137 76.6507 110.47 77.1645 108.866 77.2929C106.653 77.4535 104.472 76.8434 102.356 76.2332C101.875 76.1048 101.65 76.8755 102.131 77.0039C105.851 78.0957 110.309 79.027 113.613 76.3296C114.896 75.2699 115.762 73.6322 115.729 71.9303C115.729 70.1641 114.703 68.7512 113.324 67.7879C112.49 67.2099 111.56 66.7603 110.63 66.3749C109.476 65.8933 108.289 65.4758 107.07 65.1226C106.589 64.9941 106.397 65.7648 106.878 65.9254Z" fill="#C4674E"/>
                    <path d="M92.4775 103.464C92.6379 98.1655 94.9471 93.0597 98.7636 89.399C99.1484 89.0458 98.5711 88.4678 98.1863 88.821C94.2094 92.6102 91.8361 97.9407 91.6437 103.464C91.6437 103.978 92.4455 103.978 92.4775 103.464Z" fill="#C4674E"/>
                    <path d="M97.4486 90.5549C99.3409 91.1008 101.265 91.7751 102.997 92.7385C104.44 93.5413 105.787 94.7294 106.044 96.4634C106.268 98.1011 105.531 99.771 104.344 100.863C103.029 102.083 101.233 102.629 99.5012 102.757C97.1279 102.918 94.8188 102.276 92.5738 101.633C92.0927 101.505 91.8682 102.276 92.3493 102.404C96.262 103.56 101.009 104.556 104.504 101.762C105.916 100.638 106.846 98.8718 106.846 97.0414C106.846 95.1469 105.723 93.6376 104.248 92.5779C103.35 91.9357 102.356 91.4861 101.361 91.0687C100.143 90.5549 98.8919 90.1053 97.6411 89.7521C97.16 89.6237 96.9355 90.3943 97.4486 90.5549Z" fill="#C4674E"/>
                    <path d="M83.8182 129.314C83.9786 124.015 86.2878 118.91 90.1043 115.249C90.4891 114.896 89.9118 114.318 89.527 114.671C85.5501 118.46 83.1768 123.791 82.9844 129.314C82.9844 129.828 83.7862 129.828 83.8182 129.314Z" fill="#C4674E"/>
                    <path d="M88.7894 116.373C90.6816 116.919 92.6059 117.593 94.3378 118.556C95.781 119.359 97.128 120.547 97.3846 122.281C97.6091 123.919 96.8714 125.589 95.6848 126.681C94.3699 127.901 92.5738 128.447 90.842 128.575C88.4687 128.736 86.1595 128.094 83.9145 127.451C83.4334 127.323 83.209 128.094 83.69 128.222C87.6028 129.378 92.3493 130.374 95.8451 127.58C97.2563 126.456 98.1864 124.69 98.1864 122.859C98.1864 120.965 97.0639 119.456 95.5886 118.396C94.6906 117.754 93.6963 117.304 92.7021 116.887C91.4834 116.373 90.2326 115.923 88.9818 115.57C88.5008 115.442 88.2763 116.244 88.7894 116.373Z" fill="#C4674E"/>
                    <path d="M73.5232 148.806C73.6515 144.824 75.3834 140.97 78.2698 138.209C78.6547 137.856 78.0774 137.278 77.6925 137.631C74.6457 140.521 72.8497 144.599 72.7214 148.774C72.7214 149.32 73.5232 149.32 73.5232 148.806Z" fill="#C4674E"/>
                    <path d="M77.1794 139.108C78.5906 139.525 80.0338 140.007 81.3167 140.746C82.375 141.356 83.4013 142.223 83.5938 143.507C83.7862 144.727 83.2089 146.012 82.3109 146.815C81.3167 147.714 79.9697 148.099 78.6868 148.196C76.9229 148.292 75.2231 147.842 73.5233 147.329C73.0422 147.2 72.8177 147.971 73.2988 148.099C76.3135 148.966 79.9376 149.737 82.5995 147.585C83.69 146.718 84.3955 145.37 84.3955 143.957C84.3955 142.512 83.5617 141.324 82.4071 140.489C80.9318 139.429 79.0717 138.819 77.3398 138.337C76.8908 138.177 76.6984 138.947 77.1794 139.108Z" fill="#C4674E"/>
                    <path d="M174.773 114.51L172.111 105.358L169.642 114.51L160.79 117.432L169.642 120.419L172.111 130.341L174.901 120.483L183.432 117.432L174.773 114.51Z" fill="#FFD62A"/>
                    <path d="M27.4684 44.0895L24.8706 35.1303L22.4331 44.0574L13.7738 46.9474L22.4331 49.8375L24.8706 59.5673L27.5967 49.9017L35.9673 46.9474L27.4684 44.0895Z" fill="#FFD62A"/>
                    <path d="M192.028 90.9723L190.424 85.4491L188.917 90.9723L183.593 92.7063L188.917 94.5046L190.424 100.509L192.092 94.5688L197.255 92.7063L192.028 90.9723Z" fill="#FFD62A"/>
                    <path d="M8.67449 73.7926L7.10298 68.3978L5.62769 73.7926L0.400024 75.5266L5.62769 77.2607L7.10298 83.1371L8.73863 77.2928L13.7739 75.5266L8.67449 73.7926Z" fill="#FFD62A"/>
                    <path d="M109.957 4.46353L108.674 0L107.455 4.46353L103.157 5.87644L107.455 7.32147L108.674 12.1703L110.021 7.35358L114.19 5.87644L109.957 4.46353Z" fill="#FFD62A"/>
                    <path d="M26.1535 142.255L24.8706 137.791L23.6519 142.255L19.3543 143.7L23.6519 145.145L24.8706 149.962L26.2176 145.177L30.3869 143.7L26.1535 142.255Z" fill="#FFD62A"/>
                </svg>
            </div>
            <div>
                <div className="title">
                    Who wants to be a millionaire?
                </div>
                <div className="button">
                    <ButtonComponent onClick={ startGameHandler } text={ 'Start' }/>
                </div>
            </div>
        </div>
    )
}

export default GreetingComponent;