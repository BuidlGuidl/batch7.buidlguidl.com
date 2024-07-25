import { expect } from "chai";
import { ethers } from "hardhat";
import { parseEther } from "ethers";
import { BatchRegistry, CheckIn } from "../typechain-types";

describe("YourContract", function () {
  // We define a fixture to reuse the same setup in every test.

  let batchRegistry: BatchRegistry;
  let checkIn: CheckIn;
  let owner: any;
  let addr1: any;
  let addr2: any;
  before(async () => {
    [owner, addr1, addr2] = await ethers.getSigners();

    const batchRegistryFactory = await ethers.getContractFactory("BatchRegistry");
    batchRegistry = (await batchRegistryFactory.deploy(owner.address)) as BatchRegistry;
    await batchRegistry.waitForDeployment();

    const checkInFactory = await ethers.getContractFactory("CheckIn");
    checkIn = (await checkInFactory.deploy(batchRegistry.getAddress())) as CheckIn;
    await batchRegistry.waitForDeployment();
  });

  it("Should update the allow list", async function () {
    await batchRegistry.updateAllowList([addr1.address, addr2.address], [true, false]);
    expect(await batchRegistry.allowList(addr1.address)).to.be.true;
    expect(await batchRegistry.allowList(addr2.address)).to.be.false;
  });

  it("Should allow check-in and emit CheckedIn event", async function () {
    await batchRegistry.connect(owner).updateAllowList([owner.address], [true]);

    await owner.sendTransaction({
      to: await batchRegistry.getAddress(),
      value: parseEther("1.0"),
    });

    await expect(checkIn.checkIn())
      .to.emit(batchRegistry, "CheckedIn")
      .withArgs(true, owner.address, await checkIn.getAddress());

    expect(await batchRegistry.checkedInCounter()).to.equal(1);
    expect(await batchRegistry.yourContractAddress(owner.address)).to.equal(await checkIn.getAddress());
  });

  // it("Should checkIn", async function () {
  //   const [owner] = await ethers.getSigners();
  //   await checkIn.connect(owner).checkIn();
  // });
});
