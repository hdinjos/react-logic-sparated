import useQualitySelector from "./useQualitySelector";
import s from "./style";

function QualitySelector() {
  const { onClickPlus, onClickMinus, value, message } = useQualitySelector();
  return (
    <div style={s.wrap}>
      <h3>Counter Jos</h3>
      <div style={s.containerAct}>
        <div
          onClick={() => onClickMinus()}
          style={value === 0 ? s.noAllowed : s.action}
        >
          -
        </div>
        <div style={s.number}>{value}</div>
        <div
          onClick={() => onClickPlus()}
          style={value === 10 ? s.noAllowed : s.action}
        >
          +
        </div>
      </div>
      <div>
        <h4>{message}</h4>
      </div>
    </div>
  );
}

export default QualitySelector;
