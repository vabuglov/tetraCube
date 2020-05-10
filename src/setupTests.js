import chai from "chai";
import chaiJestSnapshot from "chai-jest-snapshot";
import '@testing-library/jest-dom/extend-expect';

chai.use(chaiJestSnapshot);

describe('hooks', () => {
  // before(() => {

  // });

  // beforeEach(() => {
  //   chaiJestSnapshot.resetSnapshotRegistry();
  // });

  beforeEach(() => {
    chaiJestSnapshot.configureUsingMochaContext(this);
  });

});