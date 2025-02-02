# XLSX parsing results for January 1st of each year are different from other dates

EveryOne! Please try running `node test.js` in your development environment to see the output!

My output is as follows:

```console
Row 1: Raw Date: 2023-01-01 03:24:21, Parsed Date: Sun Jan 01 2023 03:24:21 GMT+0800 (中国标准时间)
Row 2: Raw Date: 44928.14240740741, Parsed Date: Thu Jan 01 1970 08:00:44 GMT+0800 (中国标准时间)
Row 3: Raw Date: 44929.14240740741, Parsed Date: Thu Jan 01 1970 08:00:44 GMT+0800 (中国标准时间)
Row 4: Raw Date: 44930.14240740741, Parsed Date: Thu Jan 01 1970 08:00:44 GMT+0800 (中国标准时间)
Row 5: Raw Date: 2024-01-01 03:24:21, Parsed Date: Mon Jan 01 2024 03:24:21 GMT+0800 (中国标准时间)
Row 6: Raw Date: 45293.14240740741, Parsed Date: Thu Jan 01 1970 08:00:45 GMT+0800 (中国标准时间)
Row 7: Raw Date: 45294.14240740741, Parsed Date: Thu Jan 01 1970 08:00:45 GMT+0800 (中国标准时间)
Row 8: Raw Date: 45295.14240740741, Parsed Date: Thu Jan 01 1970 08:00:45 GMT+0800 (中国标准时间)
Row 9: Raw Date: 2025-01-01 03:24:21, Parsed Date: Wed Jan 01 2025 03:24:21 GMT+0800 (中国标准时间)
Row 10: Raw Date: 45659.14240740741, Parsed Date: Thu Jan 01 1970 08:00:45 GMT+0800 (中国标准时间)
Row 11: Raw Date: 45660.14240740741, Parsed Date: Thu Jan 01 1970 08:00:45 GMT+0800 (中国标准时间)
Row 12: Raw Date: 45661.14240740741, Parsed Date: Thu Jan 01 1970 08:00:45 GMT+0800 (中国标准时间)
```

Can Anybody tell me why? Why is every January 1st so special? Please tell me!
