import {setupWorker} from 'msw/browser';
import {
  mockAccountService,
  mockCensusService,
  mockCensusSizeService,
  mockCensusTypeService,
  mockCensusWeightService,
  mockElectionService,
  mockTransactionReferenceService,
  mockTransactionService,
  mockVoteService,
} from '../lib/provider-mocks';

export const worker = setupWorker(
  mockAccountService,
  mockElectionService,
  mockTransactionService,
  mockTransactionReferenceService,
  mockCensusService,
  mockCensusSizeService,
  mockCensusTypeService,
  mockCensusWeightService,
  mockVoteService
);
