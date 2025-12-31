import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

export default function Seo({ title, description }) {
    return (
        <Helmet>
            <title>{title} | ROADSTAR</title>
            <meta name="description" content={description} />
        </Helmet>
    );
}

Seo.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
