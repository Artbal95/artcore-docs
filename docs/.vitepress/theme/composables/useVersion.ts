import pkg from '../../../../package.json'

const useVersion = () => {
  return {
    version: pkg.version,
  }
}

export default useVersion
