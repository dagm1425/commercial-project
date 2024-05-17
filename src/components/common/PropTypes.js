import PropTypes from 'prop-types';

export const SpecsPropType = PropTypes.shape({
    floors: PropTypes.string.isRequired,
    bedrooms: PropTypes.string.isRequired,
    minMaxArea: PropTypes.string.isRequired,
    builtUpArea: PropTypes.string.isRequired,
});

export const ProjectPropType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    specs: SpecsPropType.isRequired,
    location: PropTypes.string.isRequired,
});
