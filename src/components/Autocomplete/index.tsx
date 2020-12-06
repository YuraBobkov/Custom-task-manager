import { CircularProgress, TextField } from '@material-ui/core';
import AutocompleteMui from '@material-ui/lab/Autocomplete';
import { useRouter, useRouterState } from '@routo/react';
import React, { useEffect } from 'react';
import { merge } from 'remeda';

import { useData, useFindJob } from './hooks';

export default function Autocomplete() {
  const router = useRouter();
  const { queryParams, id } = useRouterState();
  const { open, setOpen, options } = useData();
  const { handleChange, searchedJob } = useFindJob();

  const loading = open && options.length === 0;

  useEffect(() => {
    if (searchedJob) {
      router.replace(id, {
        queryParams: merge(queryParams, {
          id: searchedJob.processId,
          name: searchedJob.name,
        }),
      });
    }
    // * don't add queryParams to deps, it will lead to looping call useEffect hook
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, searchedJob, router]);

  return (
    <AutocompleteMui
      onChange={handleChange}
      id="autocomplete"
      size="small"
      style={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => option === value}
      getOptionLabel={(option) => option}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Find job"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
