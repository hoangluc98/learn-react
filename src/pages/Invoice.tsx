import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { data } from 'data/invoice';

const Invoices = () => {
  const params = useParams<{ invoiceId: string }>();
  const navigate = useNavigate();

  const invoice = data.find((item) => item.id.toString() === params.invoiceId);

  useEffect(() => {
    if (!invoice) navigate('..');
  }, [invoice, navigate]);

  return <div>Invoice #{invoice?.id}</div>;
};

export default Invoices;
