import useDeviceDetect from "./useDeviceDetect";

const useMaxPageHeight = () => {
    const { deviceHeight } = useDeviceDetect();
    const headerHeight = 35;
    const tabBarHeight = 32;
    const footerHeight = 25;

    const maxPageHeight = deviceHeight - (headerHeight + tabBarHeight + footerHeight);

    return maxPageHeight;
}

export default useMaxPageHeight;