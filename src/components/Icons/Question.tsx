import React from 'react';
export default ()=>{
const url='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA8BJREFUWEfFV1tIlEEYPbNu63rb1kvllvZQ0YUQqYeKLhARRQhSUVSQuuKulWgXCsXErJBICS0qqVVrK6FwSysTH7qg2P0tuoFZYWaYpqa4/t4nZsxtd83d2S3ZeftnznfO+Wfm+2aGQLBt3Zrk7+PfH0WHsQaURoKQWQRQsXAKdIHSTyDkFZHhkdStqDSZCrpFqIkz0M6dCXPgRdIIsAOAnzP873EzBa5jiOaUlBTXO4oZ18CGlBTvkK7e4wDdD0AhKGwP6wfI6R8q5ZGqs2f7/sbxVwNarTZ0kMrLCbDMTWGbMAo8l5PBTUajsdmeb4wBrTYxYogOVwII/x/iVhyNXkQWZTQaXlvz2hhgfz5E5S8nQHxUs9GLDC6xngmLAbbmwV1Stci0T5+uwezZs+Dv5wepV8Lnzw1oaPgiNGFsOdpUPqtH94TFQEycPgegqY5YQkKCoU+Ix4IF88bA6us/4oKhGC0trQJGSO61K4VpDMgNsFQjXuSto92uVqtxLCsDgYFqLjAwMIAeSYIqIACEjPxHe3sHMjKPwWw2OzPRT4foQpaiIwbidIUE0DmK0idosWrVCg65V1mF8tsV3IRaPRlJuxMxf/5cPlZWfhe371Q4M8CKV1HJlSI9YRVO6dvP0mPcIiOTyXCh4AyUSiWam78jLT0TlFKLSFjYDJzIPsq/3757j5zcPKcGAJh7exShJDZet40O44aztc87dZJDah8/RWHRZRu4QqFAkeE876ur+4DsE7kiBkBk2E5i4nQXASQ6ilBMmoSw8DAO6ezsRFtbuw08MjICBw/s5X2PnzyDofCSkAEABhITm/AchCwVjbDHBQcHISM9FSxDWMs9lY83b96J0VH6gs1AC4ApYhG2qGnTpiI97RCCggL5QE1NLYovX3WFqpXExul6KeDtShTDsnTMyjxsEWeZUWoqc4mGAH1uG9i/LxmLF0VyQdPNMlTcq3JJnIG5AXeWwNfXFwXn8sHSs7HxKy8+brZWtzbhzJnhyD5+hGvef/AI10quu6f/exM6TUN7dm9vBTQajSUtOzp+umeApaFIIbJnl8vlWL9uLVSqADx8WI2WVpEDaKxHXohESrF96JbNGxEdHcW7m5q+IT0jy50ZGCnFLFLkMLJWSNTHY+WK5bxLkiTs2jNSBV1plsOIGxA4jq3JNZpQpCTvhnqyGqWmW6iuqXVFm2Ftj2PWI3IhcVVlfLzdhYQBXbmS/YuRca9kjNSjl9LRv/LotfyPCQ8+TEZNePRpZr3JPPY4td/pE/U8/wV+xZHoBNxaGwAAAABJRU5ErkJggg=='
  return (
    <img
      style={{ width: '15px', height: '15px' }}
      src={url}
      alt=''

    />
  );
}
