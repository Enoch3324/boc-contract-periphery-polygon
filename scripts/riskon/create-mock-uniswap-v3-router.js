const MockUniswapV3Router = hre.artifacts.require('MockUniswapV3Router');

const main = async () => {
    const network = hre.network.name;
    console.log('\n\n 📡 create mockUniswapV3Router ... At %s Network \n', network);

    const mockUniswapV3Router = await MockUniswapV3Router.new();
    console.log('mockUniswapV3Router address:%s', mockUniswapV3Router.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
