- Because we have so many files, it can take several minutes just to ls the /data folder.

  - One folder per job / one folder per step.

- We produce a lot of metadata for each step that we end up deleting anyway during the cleaning step.

  - For each step, have a simple manifest file that contains everything needed for the next step.
  - Each line in the manifest represents one subtask (URL) processed.
  - The manifest could have the following properties:
  - <url-processed> <created-date> <modified-date> <status> <statusMessage> <outputFilePath>
  - The manifest could also provide a clear status message for each URL processed.

- The cleanup job is too complex.

  - We only diff the previous successful job.
  - Once we are done, we set the previous job to archived.
  - The cleanup job cleans the jobs set to archived.

- The syncing is complex.

  - We already produce everything needed for the sync during the diff step based on the previous job:
    a. One file that contains the new triples.
    b. One file that contains the removed triples.
    c. One file that contains the unchanged triples (intersect file).
  - These three files are plain N-Triples.
  - We use them during the publish step.
  - We can drop the gen-delta service.
  - The initial sync is simply:
    - Provide all the current jobs with a status set to success.
    - Provide the three files mentioned above.
    - Consume the intersect file and the new insert files.
    - The delta sync is simply:
    - Provide all the current jobs with a status set to success that haven’t been consumed yet.
    - Provide the three files mentioned above.
    - Consume the to-remove files and the new insert files.

- Frontend improvements:

  - When we delete a job in the frontend, we don’t delete the files and the metadata linked to it, leading to orphan files that take up space on disk.
  - It’s hard to investigate a problem on a specific (sub)URL without having to make different SPARQL queries just to figure out where the files I’m interested in are (having more filters could help).
