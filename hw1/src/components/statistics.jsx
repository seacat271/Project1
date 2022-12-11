import PropTypes from 'prop-types'
import { StatisticItem } from './StatisticItem';
export const Statistics =({title, stats}) => {
    const  {} = stats;
    return (<section >
   <h2>{title}</h2>
    <ul>
{stats.map(({id, label, percentage}) => {
  return <StatisticItem key={id} label ={label} percentage={percentage} />
})}
    </ul>
  </section>)
}

Statistics.propTypes={
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired

}