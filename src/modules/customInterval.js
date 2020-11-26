
export function customInterval(funcName, time) {
	funcName();
	return setInterval(funcName, time);
}