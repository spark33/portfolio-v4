#!/bin/bash

# Run ESLint with the --fix option on the src directory
echo "Running ESLint with --fix option..."
./node_modules/.bin/eslint src --ext .js,.jsx,.ts,.tsx --fix

# Check if there are any remaining linting errors
./node_modules/.bin/eslint src --ext .js,.jsx,.ts,.tsx --max-warnings=0
EXIT_CODE=$?

if [ $EXIT_CODE -eq 0 ]; then
  echo "✅ All linting issues have been fixed!"
else
  echo "❌ Some linting issues could not be automatically fixed. Please review the errors above."
fi

exit $EXIT_CODE 