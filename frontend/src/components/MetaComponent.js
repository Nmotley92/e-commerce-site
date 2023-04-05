import { Helmet, HelmetProvider } from 'react-helmet-async';

const MetaComponent = ({ title="Book Haven", description="Shop name" }) => {
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