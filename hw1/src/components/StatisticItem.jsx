import PropTypes from 'prop-types'
export const StatisticItem = ({label, percentage}) => {
    return (<li>
        <span>{label}</span>
        <span>{percentage}%</span>
      </li>)
}

StatisticItem.propTypes ={
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

