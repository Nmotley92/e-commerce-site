import { Helmet, HelmetProvider } from 'react-helmet-async';

const MetaComponent = ({ title="BibliophileBazaar", description="Alexis hates this name." }) => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
        </HelmetProvider>
    );
}

export default MetaComponent;