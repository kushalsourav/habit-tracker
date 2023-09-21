import './Progress.css'
import ProgressBar from '../ProgressBar/ProgressBar';
const Progress = () => {
    return (
        <div className='progress'>
            <div className="progress-head">
                <h3 className='progress-title'>Progress</h3>
                <div className="progress-time">
                    <span className='progress-period' >7 days</span>
                    <span className='progress-period'>1 month</span>
                    <span className='progress-period'>6 months</span>
                    <span className='progress-period'>1 year</span>
                </div>
            </div>
            <ProgressBar />
            <div className='progress-report'>
                <div className="progress-stat">
                    <p className="progress-days">180 Days</p>
                    <small className='progress-type'>Best Streak</small>
                </div>
                <div className="progress-stat">
                    <p className="progress-days">251 Days</p>
                    <small className='progress-type'>Perfect Days</small>
                </div>
                <div className="progress-stat">
                    <p className="progress-days">1189</p>
                    <small className='progress-type'>Goals Done</small>
                </div>
                <div className="progress-stat">
                    <p className="progress-days">903</p>
                    <small className='progress-type'>Goals Skipped</small>
                </div>
            </div>
        </div>
    );
}

export default Progress;
