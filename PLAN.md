# Maintenance Plan

This repository contains a COVID-19 tracker built with React and Ant Design.
The following plan describes upcoming tasks and improvements.

## Tasks
1. **Bug Fixes**
   - Correct country selection handler to use the value provided by Ant Design.
   - Ensure map center updates correctly when a new country is selected.
2. **Testing**
   - Add basic unit tests for `App.js` to verify state changes on country selection.
   - Integrate continuous integration to run `npm test` and `npm run build`.
3. **Code Quality**
   - Add ESLint configuration and run lint checks as part of CI.
4. **Documentation**
   - Expand README with instructions on running and building the project.

## Future Improvements
- Consider upgrading React and related dependencies to the latest stable versions.
- Add error handling for network requests.
- Provide visual feedback while data is loading.
