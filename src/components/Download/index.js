import { StyledDownload, DownloadButton } from './styles/index'

const Download = () => {
    return (
        <StyledDownload className="download">
            <a
                href="https://upload.wikimedia.org/wikipedia/en/6/6b/Hello_Web_Series_%28Wordmark%29_Logo.png"
                download
            // onClick={e => download(e)}
            >
                <DownloadButton>
                    Download & Share!
                </DownloadButton>
            </a>

        </StyledDownload>
    );
}

export default Download; 
