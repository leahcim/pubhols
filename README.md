## Running the program

Run with `npm run main` for the default country code AT (Austria).

You can also specify a country code, e.g. `npm run main US`

[Supported country codes](https://date.nager.at/Country)

## Assumptions and Decisions Made

- Weekend === Saturday/Sunday
- '0 days until' case is displayed as it's not yet in the past, even though it's also not in the future
- For invalid country codes, generated file contains only column headers
- Code files could be further segregated into folders, eg. `csv.ts` and `date.ts` into a `util` folder but I thought it'd be overkill in this case as we only have 5 source files.
